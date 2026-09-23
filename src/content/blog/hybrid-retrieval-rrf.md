---
title: 'Sample post: hybrid retrieval with reciprocal rank fusion'
description: 'Keyword search and vector search fail in different ways. Fusing their rankings is a cheap, robust way to get the best of both, and it takes about ten lines of code.'
date: 2026-09-19
tag: Retrieval
draft: true
---

> This is a **sample post** that shows how writing looks on this site: headings, code, tables, quotes and lists. Delete this file and drop in your own markdown.

## Why combine two retrievers?

BM25 is excellent when the query shares exact terms with the document, like error codes, product names or rare entities. Dense embeddings shine when the wording differs but the meaning matches. In practice, each one misses documents the other finds easily.

You could train a model to merge the two score distributions, but the scores aren't on comparable scales. Reciprocal rank fusion sidesteps the problem entirely by ignoring scores and using only _rank positions_.

## How reciprocal rank fusion works

Each document gets a score of `1 / (k + rank)` from every list it appears in, and the scores are summed. A constant `k` (commonly 60) dampens the gap between the very top ranks, so one retriever can't dominate.

### The implementation

```python
from collections import defaultdict

def reciprocal_rank_fusion(rankings, k=60, top_k=10):
    """rankings: list of ranked lists of doc ids, best first."""
    scores = defaultdict(float)
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking, start=1):
            scores[doc_id] += 1.0 / (k + rank)
    return sorted(scores, key=scores.get, reverse=True)[:top_k]

fused = reciprocal_rank_fusion([bm25_ids, vector_ids])
```

### A worked example

Documents that rank reasonably well in _both_ lists beat a document that tops only one:

| Document | BM25 rank | Vector rank | RRF score |
| -------- | --------- | ----------- | --------- |
| doc A    | 1         | —           | 0.0164    |
| doc B    | 3         | 2           | 0.0320    |
| doc C    | —         | 1           | 0.0164    |
| doc D    | 2         | 4           | 0.0318    |

> Rank fusion is one of those rare techniques that is both hard to beat and almost free to try.

## Takeaways

- **Start with RRF** before training a learned re-ranker; it's a strong baseline.
- Tune `k` and the candidate depth of each retriever, not the fusion math.
- Evaluate with ranking metrics like NDCG and recall at k, not just top-1 accuracy.
