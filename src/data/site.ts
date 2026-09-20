// Everything on the homepage lives here. Edit data, not markup.

export const profile = {
  name: 'Manikanta Loya',
  role: 'ML Engineer',
  company: { name: 'Fireworks AI', url: 'https://fireworks.ai' },
  location: 'Fremont, California',
  photo: '/images/me-400.jpg',
  resume: '/doc/Resume_Manikanta_Loya_ML.pdf',
  facts: ['Inference optimization', 'RL post-training', 'Fremont, California'],
  greeting: 'Hey Hi!, I am Mani. Nice meeting you!',
  quote: { text: 'You were born an original, don\u2019t die a copy.', author: 'John Mason' },
  about: [
    'I am a <strong>Machine Learning Engineer at Fireworks AI</strong>, working on inference optimization and RL post-training.',
    'Before Fireworks, I was a Software Engineer, ML at <strong>Meta</strong>, building and optimizing ML systems: feature pipelines, multi-agent LLM systems, and query infrastructure at scale. Before that, I was an ML Research Engineer at <strong>Evidium</strong> (healthcare AI, San Francisco), where I built clinical NEL pipelines, RAG-powered chatbots, and scaled distributed training across multi-node A800 GPUs.',
    'I hold an MS in CS (4.0 GPA) from <strong>UC Irvine</strong>, where I researched adversarial ML security on code LLMs and cognitive behavior of language models under Prof. Sameer Singh and Prof. Richard Futrell. My work was published at EMNLP Findings 2023 and AAAI EAAI 2023. I completed my bachelor\u2019s in Electronics Engineering from <strong>IIT BHU Varanasi</strong>.',
    'I care about ML systems that work at scale and writing clearly about what I learn along the way. Outside work, I like to hike, play <a href="https://www.chess.com/member/manikanta72">chess</a>, and create <a href="https://www.pinterest.com/mani6918/art/">art</a>.',
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/manikanta-72', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manikantaloya/', icon: 'linkedin' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=Z4OjKfcAAAAJ&hl=en',
      icon: 'scholar',
    },
    { label: 'Art on Pinterest', href: 'https://www.pinterest.com/mani6918/art/', icon: 'pinterest' },
  ],
};

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'writing', label: 'Writing' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
];

export type Entry = {
  title: string;
  href?: string;
  meta?: string;
  date: string;
  points: string[];
};

export const experience: Entry[] = [
  {
    title: 'Machine Learning Engineer @ Fireworks AI',
    href: 'https://fireworks.ai',
    date: '2026 \u2013 Present',
    points: ['Working on <strong>inference optimization</strong> and <strong>RL post-training</strong>.'],
  },
  {
    title: 'Software Engineer, ML @ Meta',
    date: 'Jun 2025 \u2013 Jul 2026',
    points: [
      'Optimized ML feature pipelines by eliminating distributed query bottlenecks and redesigning feature materialization, reducing compute by <strong>~50%</strong>.',
      'Built a Reflexion-style <strong>multi-agent LLM system</strong> where a routing agent orchestrates tool-equipped sub-agents for autonomous alert diagnosis with a self-correction loop, reducing human triage time by <strong>80%</strong>.',
      'Designed metadata-driven <strong>O(1) query optimizations</strong>, cutting latency by <strong>~1000x</strong> on large tables.',
    ],
  },
  {
    title: 'ML Research Engineer @ Evidium',
    date: 'Aug 2023 \u2013 May 2025',
    points: [
      'Architected and deployed end-to-end ML across research, training, and production for three clinical AI products at an early-stage healthcare startup.',
      'Built a <strong>NEL pipeline</strong> mapping clinical text to 400K+ medical entities with constrained decoding via restriction tries.',
      'Trained <strong>GNNs</strong> on a proprietary knowledge graph, fusing graph embeddings with a T5 encoder-decoder via cross-modal retrieval for entity linking; F1 improved by <strong>10%</strong>.',
      'Built a clinical AI chatbot powered by <strong>RAG</strong> with HyDE query expansion, FAISS vector retrieval, and an LLM self-critique layer for hallucination reduction.',
      'Scaled distributed training across <strong>multi-node A800 GPUs</strong> using FSDP; cut inference latency by <strong>31%</strong> via token caching and continuous batching.',
    ],
  },
  {
    title: 'Graduate Student Researcher @ UCI',
    date: 'Mar 2022 \u2013 Sep 2023',
    points: [
      'Advised by <strong>Prof. Sameer Singh</strong> (NLP Lab, DARPA-funded) and <strong>Prof. Richard Futrell</strong> (Linguistics, NSF-funded).',
      'Researched adversarial ML security on code LLMs (Incoder, PolyCoder); evaluated backdoor trigger injection and clean-label poisoning attacks under the DARPA TADS program.',
      'Analyzed decision-making sensitivity of LLMs to prompt variations on the Horizon task; demonstrated human-like exploration-exploitation tradeoffs. Published at <strong>EMNLP Findings 2023</strong>.',
      'Built the NSF Maestro platform for collecting behavioral data on spatial reasoning tasks at scale.',
    ],
  },
  {
    title: 'SDE Intern @ Amazon Web Services',
    date: 'Jun 2022 \u2013 Sep 2022',
    points: [
      'Designed and implemented an automated EBS Snapshot cleanup pipeline in Python for cloud storage lifecycle management.',
      'Optimized data partitioning, load balancing, and MapReduce strategies: <strong>50% runtime reduction</strong> and <strong>60% cost savings</strong>.',
    ],
  },
  {
    title: 'Software Engineer @ Samsung Research Institute',
    date: 'Jul 2017 \u2013 Sep 2020',
    points: [
      'Led development of <strong>4G and 5G cellular dongle interfaces</strong> for Samsung TV; integrated MBIM and QMI modem protocols, reducing network connection time by <strong>83%</strong>.',
      'Shipped at CES 2020; co-inventor on a US patent.',
    ],
  },
];

export const publications: Entry[] = [
  {
    title:
      'Exploring the Sensitivity of LLMs\u2019 Decision-Making Capabilities: Insights from Prompt Variations and Hyperparameters',
    href: 'https://arxiv.org/abs/2312.17476',
    meta: 'Manikanta Loya, Divya Sinha, Richard Futrell',
    date: 'EMNLP Findings 2023',
    points: [
      'Analyzed decision-making sensitivity of LLMs to prompt variations on the Horizon task, demonstrating human-like exploration-exploitation tradeoffs.',
      'Shows that LLMs exhibit structured uncertainty that mirrors human cognitive behavior.',
    ],
  },
  {
    title: 'Maestro: A Gamified Platform for Teaching AI Robustness',
    href: 'https://ojs.aaai.org/index.php/AAAI/article/view/26878',
    meta: 'Margarita Geleta, Jiacen Xu, Manikanta Loya, Junlin Wang, Sameer Singh, Zhou Li, Sergio Gago-Masague',
    date: 'AAAI EAAI 2023',
    points: [
      'Designed and developed an open-source game-based platform for robust AI education, exposing students to adversarial ML challenges in a competitive programming environment.',
      'Evaluated with 147 undergraduate students across two college courses; leaderboard identified as a key driver of engagement and learning.',
    ],
  },
];

export const projects: Entry[] = [
  {
    title: 'Multi-Image Generation using Cycle GAN',
    href: 'https://github.com/manikanta-72/multi-image-generation',
    date: 'Mar 2022 \u2013 Jun 2022',
    points: [
      'Designed and implemented Augmented Cycle GAN to learn and generate many-to-many mappings of two domains using noise.',
      'Injected noise acts as a latent variable controlling image generation; varying it produces different versions of a single image.',
      'Analyzed performance on Edges2Shoes, Night2Day, CelebA and FERDB datasets.',
    ],
  },
  {
    title: 'Distributed Multi-Room Chat Application',
    date: 'Jan 2023 \u2013 Mar 2023',
    points: [
      'Designed and implemented a multi-room chat web application in a distributed environment, deployed on AWS EC2 instances.',
      'Publish-subscribe architecture implemented using Apache Kafka as the messaging middleware.',
      'Java Spring Boot and React used as backend and frontend.',
    ],
  },
];
