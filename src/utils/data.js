export const STUDENTS = [
  { id:1, name:'Zoya Irani',          major:'Quantum Computing',    year:'3rd Year', college:'IISER Pune',        skills:['Qiskit','Python'],   avatar:'https://i.pravatar.cc/150?img=25', followers:489, posts:34, online:true,  rating:4.9 },
  { id:2, name:'Meghna Pillai',       major:'Interaction Design',   year:'2nd Year', college:'NID Ahmedabad',     skills:['Figma','After Effects'], avatar:'https://i.pravatar.cc/150?img=47', followers:612, posts:51, online:true,  rating:4.8 },
  { id:3, name:'Siddhanth Oberoi',    major:'Distributed Systems',  year:'4th Year', college:'IIT Kharagpur',     skills:['Go','Kafka'],        avatar:'https://i.pravatar.cc/150?img=60', followers:273, posts:28, online:false, rating:4.7 },
  { id:4, name:'Tanvi Krishnaswamy',  major:'Computational Bio',    year:'3rd Year', college:'IISc Bangalore',    skills:['R','BioPython'],     avatar:'https://i.pravatar.cc/150?img=44', followers:318, posts:19, online:true,  rating:4.6 },
  { id:5, name:'Vikram Nandakumar',   major:'Robotics & AI',        year:'4th Year', college:'IIT Madras',        skills:['ROS','C++'],         avatar:'https://i.pravatar.cc/150?img=67', followers:401, posts:47, online:false, rating:4.8 },
  { id:6, name:'Ananya Bhattacharyya',major:'FinTech',              year:'3rd Year', college:'NMIMS Mumbai',      skills:['Solidity','React'],  avatar:'https://i.pravatar.cc/150?img=48', followers:234, posts:22, online:true,  rating:4.5 },
  { id:7, name:'Dhruv Saxena',        major:'Computer Vision',      year:'2nd Year', college:'BITS Goa',          skills:['PyTorch','OpenCV'],  avatar:'https://i.pravatar.cc/150?img=57', followers:178, posts:16, online:true,  rating:4.4 },
  { id:8, name:'Riya Thakkar',        major:'Cloud Architecture',   year:'3rd Year', college:'DAIICT Gandhinagar',skills:['AWS','Terraform'],   avatar:'https://i.pravatar.cc/150?img=32', followers:295, posts:33, online:false, rating:4.7 },
];

export const STUDY_GROUPS = [
  { id:1, name:'Zero to Distributed',   subject:'Distributed Systems', members:19, max:25, tags:['System Design','Go'],    image:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80', active:true,  schedule:'Mon–Wed 9PM',  host:'Siddhanth Oberoi'     },
  { id:2, name:'Quant Finance Lab',     subject:'Quant Finance & ML',   members:14, max:20, tags:['Python','Statistics'],    image:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80', active:true,  schedule:'Fri 8PM',      host:'Ananya Bhattacharyya' },
  { id:3, name:'OSS Builders',          subject:'Open Source Dev',       members:38, max:50, tags:['GitHub','CI/CD'],         image:'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&q=80', active:true,  schedule:'Weekends 11AM', host:'Vikram Nandakumar'    },
  { id:4, name:'Design Systems Circle', subject:'UI/UX Engineering',     members:22, max:30, tags:['Figma','Storybook'],      image:'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80', active:false, schedule:'Thu 7PM',      host:'Meghna Pillai'        },
  { id:5, name:'Neuro-AI Group',        subject:'Computational Neuro',   members:11, max:15, tags:['Transformers','Arxiv'],   image:'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80', active:true,  schedule:'Tue & Sat 6PM', host:'Zoya Irani'           },
  { id:6, name:'DevSec Ops Crew',       subject:'Security & CTF',        members:17, max:20, tags:['CTF','Burp Suite'],       image:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80', active:true,  schedule:'Sun 5PM',      host:'Dhruv Saxena'         },
];

export const EVENTS = [
  { id:1, title:"IndiHacks '25 — 15L Prize Pool",         category:'Hackathon', date:'2025-04-18', time:'9AM',  venue:'IIT Delhi Campus',        attendees:780,  max:1200, image:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80', organizer:'TechSoc IIT-D',   tags:['AI','Web3'],    featured:true  },
  { id:2, title:'React Deep Internals Workshop',           category:'Workshop',  date:'2025-03-29', time:'3PM',  venue:'Online (Discord)',         attendees:210,  max:300,  image:'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&q=80', organizer:'OSS Builders',    tags:['React'],        featured:false },
  { id:3, title:'Founders Meetup Campus Edition',          category:'Networking',date:'2025-04-05', time:'6PM',  venue:'91springboard Bangalore',  attendees:340,  max:400,  image:'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80', organizer:'StudentVC India', tags:['Startups'],     featured:true  },
  { id:4, title:'Compute India Summit AI Infrastructure',  category:'Summit',    date:'2025-04-22', time:'10AM', venue:'Bharat Mandapam Delhi',    attendees:1100, max:1500, image:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80', organizer:'Compute India',   tags:['LLMs','MLOps'], featured:true  },
  { id:5, title:'ICPC Asia Regionals Practice Contest',    category:'Contest',   date:'2025-04-02', time:'2PM',  venue:'Online (Codeforces)',      attendees:620,  max:1000, image:'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80', organizer:'ICPC Foundation', tags:['CP','Algorithms'],featured:false },
  { id:6, title:'Product Teardown 5 Unicorns Dissected',  category:'Workshop',  date:'2025-04-11', time:'7PM',  venue:'Online (Zoom)',            attendees:480,  max:600,  image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80', organizer:'Product People',  tags:['PM','Strategy'],featured:false },
];

export const QUESTIONS = [
  { id:1, title:'How does Go handle goroutine scheduling?',     body:'I want to understand the GOMAXPROCS scheduler — M:N threading vs OS threads...',           author:'Siddhanth Oberoi',   avatar:'https://i.pravatar.cc/150?img=60', tags:['Go','Concurrency'],   votes:94,  answers:11, views:1840, time:'3h ago', solved:true  },
  { id:2, title:'Transformer attention O(n2) workarounds?',     body:'Working on 50K-token docs. Attention is bottlenecking. Tried FlashAttention already.',        author:'Zoya Irani',         avatar:'https://i.pravatar.cc/150?img=25', tags:['ML','Transformers'],  votes:156, answers:19, views:4320, time:'6h ago', solved:false },
  { id:3, title:'Postgres vs ClickHouse for analytics?',        body:'Dashboard queries hit 200M rows. Postgres timing out. Worried about write tradeoffs.',        author:'Riya Thakkar',       avatar:'https://i.pravatar.cc/150?img=32', tags:['PostgreSQL','OLAP'],  votes:73,  answers:8,  views:2100, time:'1d ago', solved:true  },
  { id:4, title:'Multi-tenant SaaS schema in PostgreSQL?',      body:'Debating RLS vs schema-per-tenant vs DB-per-tenant. What tradeoffs matter at early scale?',   author:'Tanvi Krishnaswamy', avatar:'https://i.pravatar.cc/150?img=44', tags:['PostgreSQL','SaaS'],  votes:88,  answers:14, views:3670, time:'2d ago', solved:false },
  { id:5, title:'ROS2 vs ROS1 migration worth it in 2025?',     body:'Large robot codebase on ROS1 Noetic. EOL is coming. Is ROS2 Humble stable enough?',          author:'Vikram Nandakumar',  avatar:'https://i.pravatar.cc/150?img=67', tags:['ROS','Robotics'],     votes:41,  answers:6,  views:930,  time:'3d ago', solved:true  },
];

export const NOTIFICATIONS = [
  { id:1, type:'answer',  msg:'Zoya Irani answered your Transformer question',    time:'4m ago',  read:false, avatar:'https://i.pravatar.cc/150?img=25' },
  { id:2, type:'join',    msg:"Your application to OSS Builders was accepted",    time:'1h ago',  read:false, avatar:'https://i.pravatar.cc/150?img=67' },
  { id:3, type:'like',    msg:'Meghna and 12 others upvoted your question',       time:'2h ago',  read:false, avatar:'https://i.pravatar.cc/150?img=47' },
  { id:4, type:'event',   msg:"IndiHacks 25 registration closes in 48 hours",     time:'5h ago',  read:true,  avatar:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=50' },
  { id:5, type:'follow',  msg:'Siddhanth Oberoi started following you',           time:'1d ago',  read:true,  avatar:'https://i.pravatar.cc/150?img=60' },
  { id:6, type:'mention', msg:"Dhruv mentioned you in DevSec Ops Crew",           time:'2d ago',  read:true,  avatar:'https://i.pravatar.cc/150?img=57' },
];

export const ACTIVITY_FEED = [
  { id:1, user:'Zoya Irani',          avatar:'https://i.pravatar.cc/150?img=25', action:'published a thread',    item:'Quantum advantage in ML inference 2025',    time:'8m ago',  type:'post'   },
  { id:2, user:'Meghna Pillai',       avatar:'https://i.pravatar.cc/150?img=47', action:'shared a resource',     item:'Design tokens the Figma to Code pipeline',  time:'1h ago',  type:'share'  },
  { id:3, user:'Vikram Nandakumar',   avatar:'https://i.pravatar.cc/150?img=67', action:'joined the group',      item:'OSS Builders 38 members',                   time:'3h ago',  type:'group'  },
  { id:4, user:'Siddhanth Oberoi',    avatar:'https://i.pravatar.cc/150?img=60', action:'answered a question',   item:'How does Go handle goroutine scheduling',    time:'5h ago',  type:'answer' },
  { id:5, user:'Riya Thakkar',        avatar:'https://i.pravatar.cc/150?img=32', action:'registered for event',  item:'Compute India Summit 2025',                  time:'8h ago',  type:'event'  },
  { id:6, user:'Tanvi Krishnaswamy',  avatar:'https://i.pravatar.cc/150?img=44', action:'posted a question',     item:'Multi-tenant SaaS schema PostgreSQL',        time:'1d ago',  type:'post'   },
];

export const MOCK_USER = {
  id:1, name:'Ishaan Kapoor', email:'ishaan@campus.edu',
  avatar:'https://i.pravatar.cc/150?img=65',
  major:'Computer Engineering', year:'3rd Year',
  college:'IIIT Hyderabad',
  skills:['React','Go','PostgreSQL','Redis'],
  bio:'Building developer tools. Open-source contributor and CTF enthusiast.',
  followers:347, following:192, posts:58,
};