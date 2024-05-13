const fs = require('fs')

const data = [
  {
    publisher: '82 Startup',
    title:
      'Chartmetric \u110c\u1169\u1109\u1165\u11bc\u1106\u116e\u11ab \u1103\u1162\u1111\u116d \u110e\u1161\u11bc\u110b\u1165\u11b8\u1109\u1173\u1110\u1169\u1105\u1175',
    year: '2019',
    videoId: 'v7Z2nlIBu9k',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'Introduction of Sungmoon Cho, CEO of Chartmetric, a music data analytics company.',
        tags: ['success']
      },
      {
        timestamp: '00:01:10,000',
        summary:
          'Sungmoon Cho started his blog out of loneliness as an immigrant in the US, and it unexpectedly became popular.',
        tags: ['culture', 'language', 'networking']
      },
      {
        timestamp: '00:03:41,000',
        summary:
          'Sungmoon Cho shares his experience with government funding programs in Korea, including tips on securing funding.',
        tags: ['fundraising', 'advice']
      },
      {
        timestamp: '00:05:06,000',
        summary:
          'Sungmoon Cho recounts a memorable blog post comparing Naver and Google, which went viral and earned him an invitation to Naver headquarters.',
        tags: ['success', 'culture']
      },
      {
        timestamp: '00:09:16,000',
        summary:
          "Sungmoon Cho's blogging journey helped him build a reputation and network, which he hoped would be beneficial for future startup endeavors.",
        tags: ['networking', 'advice']
      },
      {
        timestamp: '00:10:39,000',
        summary:
          'Sungmoon Cho shares his perspective on startup attempts while working full-time, emphasizing the challenges and his own unsuccessful experiences.',
        tags: ['advice']
      },
      {
        timestamp: '00:12:49,000',
        summary:
          'Sungmoon Cho discusses his upbringing and early career aspirations, which initially leaned towards stable career paths like civil service or academia.',
        tags: ['culture']
      },
      {
        timestamp: '00:14:44,000',
        summary:
          "Sungmoon Cho explains how he joined Gamevil as a student intern and eventually became a part of the company's growth.",
        tags: ['team']
      },
      {
        timestamp: '00:20:15,000',
        summary:
          'Sungmoon Cho describes the factors that sparked his interest in entrepreneurship while working at Gamevil, including observing the successes of others.',
        tags: ['success', 'resilience']
      },
      {
        timestamp: '00:25:17,000',
        summary:
          'Sungmoon Cho shares his journey of pursuing an MBA at UCLA, driven by his ambition to start a business in the US.',
        tags: ['immigration', 'advice']
      },
      {
        timestamp: '00:29:09,000',
        summary:
          'Sungmoon Cho reflects on the benefits of his MBA experience, particularly in developing business skills and navigating American culture.',
        tags: ['culture', 'language', 'advice']
      },
      {
        timestamp: '00:35:41,000',
        summary:
          "Sungmoon Cho discusses his experience working at Oracle, highlighting the company's business model and the insights he gained from analyzing its competitors like Salesforce.",
        tags: ['growth']
      },
      {
        timestamp: '00:41:43,000',
        summary:
          'Sungmoon Cho recounts an unexpected opportunity presented by a wealthy investor who offered funding and a leadership role, leading him to leave Oracle.',
        tags: ['fundraising', 'resilience']
      },
      {
        timestamp: '00:46:41,000',
        summary:
          'Sungmoon Cho shares his brief experience exploring a P2P lending business idea in Korea, which he ultimately abandoned due to his preference for the US market.',
        tags: ['fundraising', 'resilience']
      },
      {
        timestamp: '00:49:51,000',
        summary:
          'Sungmoon Cho talks about his initial startup idea combining gaming and education, and how he pivoted after receiving feedback from a friend.',
        tags: ['team', 'advice']
      },
      {
        timestamp: '00:57:51,000',
        summary:
          "Sungmoon Cho describes joining the SparkLabs accelerator program with his K-pop video curation platform, and how a mentor's advice led to the creation of Chartmetric.",
        tags: ['team', 'fundraising']
      },
      {
        timestamp: '01:02:18,000',
        summary:
          "Sungmoon Cho explains Chartmetric's early growth, emphasizing the importance of focusing on revenue generation due to limited funding.",
        tags: ['fundraising', 'growth']
      },
      {
        timestamp: '01:07:56,000',
        summary:
          "Sungmoon Cho highlights the significance of early paying customers for Chartmetric's development and motivation, sharing a story of his first customer's support.",
        tags: ['success', 'resilience']
      },
      {
        timestamp: '01:11:20,000',
        summary:
          "Sungmoon Cho expresses gratitude for the support of key individuals who contributed to Chartmetric's success, emphasizing the importance of relationships in his journey.",
        tags: ['networking', 'success', 'resilience']
      },
      {
        timestamp: '01:19:20,000',
        summary:
          'Sungmoon Cho explains why he chose the K-pop industry for his business, driven by its growth potential, personal connection, and the positive changes he observed in the industry.',
        tags: ['culture', 'resilience']
      },
      {
        timestamp: '01:21:17,000',
        summary:
          "Sungmoon Cho draws parallels between startups and surfing, emphasizing the need to ride the right wave for success and sharing lessons learned from Gamevil's growth.",
        tags: ['advice', 'success']
      },
      {
        timestamp: '01:24:52,000',
        summary:
          "Sungmoon Cho discusses his decision not to apply to Y Combinator, attributing it to the perceived mismatch between his business and the program's focus.",
        tags: ['fundraising']
      },
      {
        timestamp: '01:27:23,000',
        summary:
          'Sungmoon Cho recommends applying to accelerator programs, especially for younger entrepreneurs, while emphasizing the importance of finding a niche market.',
        tags: ['advice']
      }
    ]
  },
  {
    publisher: '82 Startup',
    title:
      '\u1106\u1175\u1106\u1175\u1107\u1161\u11a8\u1109\u1173 \u1112\u1161\u1112\u1167\u11bc\u1109\u1165\u11a8 \u1103\u1162\u1111\u116d \u110e\u1161\u11bc\u110b\u1165\u11b8\u1109\u1173\u1110\u1169\u1105\u1175 (1/2)',
    year: '2019',
    videoId: 'roLeVQGRlyk',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary: 'Introduction to Hyeongsuk Ha, cofounder of Memebox',
        tags: ['success']
      },
      {
        timestamp: '00:00:42,480',
        summary:
          "Hyeongsuk Ha's journey begins with a passion for environmental science, influenced by his father's gift of science magazines.",
        tags: ['culture']
      },
      {
        timestamp: '00:02:11,520',
        summary:
          "Hyeongsuk Ha's early entrepreneurial spirit emerges during his university years, as he explores various business ventures, including a roasted sweet potato stand and an online shoe store.",
        tags: ['success', 'advice']
      },
      {
        timestamp: '00:06:00,919',
        summary:
          "Hyeongsuk Ha's military service in Afghanistan introduces him to American culture and inspires him to relocate to the United States.",
        tags: ['culture', 'language']
      },
      {
        timestamp: '00:07:16,160',
        summary:
          'To support himself financially while pursuing his studies in the US, Hyeongsuk Ha starts an eBay business selling discounted fashion items, gaining valuable experience in online sales.',
        tags: ['success', 'advice']
      },
      {
        timestamp: '00:09:12,959',
        summary:
          "An opportunity arises for Hyeongsuk Ha to establish a branch of his former employer's fashion label in Korea, leading him back to his home country.",
        tags: ['success']
      },
      {
        timestamp: '00:10:29,839',
        summary:
          'Reconnecting with former colleagues at TMON, Hyeongsuk Ha explores the idea of starting a new venture, ultimately deciding to leave TMON and embark on a new entrepreneurial journey.',
        tags: ['networking', 'team', 'success']
      },
      {
        timestamp: '00:12:00,920',
        summary:
          'Inspired by the success of Birchbox in the US, Hyeongsuk Ha and his cofounders launch Memebox, a subscription-based beauty box service in Korea, with a 90-day deadline to determine its viability.',
        tags: ['team', 'success', 'advice']
      },
      {
        timestamp: '00:15:41,680',
        summary:
          'Memebox launches in Korea within 71 days, facing initial challenges in securing beauty product samples and assembling a team on a limited budget.',
        tags: ['team', 'growth', 'fundraising', 'advice']
      },
      {
        timestamp: '00:18:18,919',
        summary:
          'Memebox gains traction with its first 100 boxes, securing a major PR opportunity and achieving significant revenue within three months.',
        tags: ['success', 'growth']
      },
      {
        timestamp: '00:20:59,320',
        summary:
          "Rapid growth and success lead to expansion, hiring, and a shift in company culture, with lessons learned from TMON's growth trajectory.",
        tags: ['team', 'growth', 'advice']
      },
      {
        timestamp: '00:23:11,640',
        summary:
          "Memebox faces financial challenges, forcing difficult decisions, including layoffs and restructuring, ultimately strengthening the company's resilience and leading to a rebound in growth.",
        tags: ['team', 'resilience', 'growth', 'advice']
      },
      {
        timestamp: '00:25:45,799',
        summary:
          'Encouraged by Y Combinator partner Kevin Hale, Hyeongsuk Ha and his team decide to pursue investment opportunities in Silicon Valley.',
        tags: ['fundraising', 'advice']
      },
      {
        timestamp: '00:27:16,159',
        summary:
          'Despite initial challenges in communicating their vision in English, Memebox secures a spot in the Y Combinator program, standing out as the first Korean beauty company to do so.',
        tags: ['language', 'resilience', 'fundraising', 'success', 'advice']
      },
      {
        timestamp: '00:31:14,320',
        summary:
          'Memebox experiences early success in the US market, leveraging online communities like Reddit for viral marketing and adapting to the fast-paced Silicon Valley environment.',
        tags: ['growth', 'marketing', 'culture']
      },
      {
        timestamp: '00:33:25,240',
        summary:
          'To accelerate growth, Memebox implements a demanding work schedule, driving impressive results but also facing challenges in maintaining team morale.',
        tags: ['team', 'growth', 'resilience', 'advice']
      },
      {
        timestamp: '00:36:00,079',
        summary:
          "Memebox's rapid growth in the US attracts attention from top venture capital firms, including Sequoia Capital, leading to a successful Series A funding round.",
        tags: ['fundraising', 'growth', 'success']
      },
      {
        timestamp: '00:38:50,000',
        summary:
          'To overcome language barriers during fundraising, Hyeongsuk Ha hires a Stanford intern to assist with communication and refine his pitch, highlighting the importance of seeking support and delegating tasks.',
        tags: ['language', 'team', 'fundraising', 'advice']
      },
      {
        timestamp: '00:41:45,359',
        summary:
          'Continued success in the US market leads to a rapid Series B funding round, enabling Memebox to expand its operations and invest in developing its own private label products.',
        tags: ['fundraising', 'growth', 'success']
      },
      {
        timestamp: '00:44:28,839',
        summary:
          "The unexpected impact of THAAD deployment in South Korea disrupts Memebox's growth trajectory, forcing the company to adjust its strategy and cope with the sudden loss of its largest market.",
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:48:49,280',
        summary:
          'Memebox navigates through a period of financial strain and operational challenges, prompting a focus on cost optimization, organizational restructuring, and a reassessment of its expansion strategy.',
        tags: ['resilience', 'growth', 'advice']
      },
      {
        timestamp: '00:52:24,599',
        summary:
          'Hyeongsuk Ha reflects on the importance of learning from setbacks, adapting to changing market conditions, and building a resilient team that can weather adversity.',
        tags: ['resilience', 'team', 'growth', 'advice']
      },
      {
        timestamp: '00:55:09,000',
        summary:
          'Hyeongsuk Ha emphasizes the importance of seeking support from mentors and coaches, investing in personal growth, and building a strong leadership team to guide the company through future challenges.',
        tags: ['team', 'resilience', 'advice']
      },
      {
        timestamp: '00:56:52,720',
        summary:
          "The interview concludes with Hyeongsuk Ha's insights on the evolution of his vision for Memebox, highlighting the importance of aligning personal growth with company strategy and adapting to the unique opportunities and challenges of the beauty industry.",
        tags: ['resilience', 'advice', 'success']
      }
    ]
  },
  {
    publisher: '82 Startup',
    title:
      '\u1106\u1175\u1106\u1175\u1107\u1161\u11a8\u1109\u1173 \u1112\u1161\u1112\u1167\u11bc\u1109\u1165\u11a8 \u1103\u1162\u1111\u116d \u110e\u1161\u11bc\u110b\u1165\u11b8\u1109\u1173\u1110\u1169\u1105\u1175 (2/2)',
    year: '2019',
    videoId: 'AphLZbSlPf4',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:00:01,440',
        summary:
          'Hyeongsuk Ha talks about his experiences growing Mimibox, a beauty subscription service, in the United States.',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:00:23,640',
        summary:
          'Discussion about the cultural differences between the US and Korea, particularly the "do it yourself" mentality in the US.',
        tags: ['culture', 'advice']
      },
      {
        timestamp: '00:01:26,880',
        summary:
          'Challenges of hiring and building a team, particularly during difficult times for the company.',
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:02:17,879',
        summary:
          'Hyeongsuk shares his experiences and lessons learned from working with a challenging company and turning it around.',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:03:23,840',
        summary:
          'Importance of focusing on growth as the guiding principle for the company, rather than getting distracted by operational details.',
        tags: ['growth', 'advice']
      },
      {
        timestamp: '00:04:05,680',
        summary:
          "Hyeongsuk emphasizes the significance of growth rate as the key metric for evaluating the company's performance.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:05:29,680',
        summary:
          "The impact of external factors, such as the THAAD missile defense system deployment, on Mimibox's business in China.",
        tags: ['growth', 'resilience']
      },
      {
        timestamp: '00:06:38,880',
        summary:
          'Discussion about managing investor relations and setting expectations with the board of directors.',
        tags: ['fundraising', 'advice']
      },
      {
        timestamp: '00:07:37,800',
        summary:
          "Hyeongsuk reveals Mimibox's strategic goals for the next year, including expanding its presence in the US market.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:08:33,519',
        summary:
          'Reasons for focusing on the US market and the opportunities it presents for Mimibox.',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:09:26,800',
        summary:
          "Mimibox's investments in vegan beauty products and the company's commitment to sustainability.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:10:03,360',
        summary:
          'Hyeongsuk shares a mistake he made in dealing with investors and how he learned to set clear communication rules.',
        tags: ['fundraising', 'advice']
      },
      {
        timestamp: '00:11:08,160',
        summary:
          'The increasing responsibility and decision-making burden on the CEO as the company grows.',
        tags: ['growth', 'advice']
      },
      {
        timestamp: '00:12:25,279',
        summary:
          'Importance of Silicon Valley as a hub for tech talent and its role in attracting engineers to the beauty industry.',
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:13:39,240',
        summary:
          'Challenges of balancing product development speed with quality and regulatory requirements, particularly in the context of international expansion.',
        tags: ['growth', 'resilience']
      },
      {
        timestamp: '00:14:15,639',
        summary:
          "Mimibox's collaboration with Sephora and the co-development of a new brand called Kaja.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:15:23,440',
        summary:
          "Hyeongsuk's direct approach to building relationships with key partners and investors, bypassing intermediaries.",
        tags: ['networking', 'fundraising']
      },
      {
        timestamp: '00:16:34,600',
        summary:
          'Emphasis on volume and outreach when it comes to recruiting talent and securing partnerships.',
        tags: ['team', 'networking']
      },
      {
        timestamp: '00:17:47,280',
        summary:
          "Mimibox's internal efforts to accelerate product development and maintain a competitive edge in the market.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:18:39,280',
        summary:
          "Logistical challenges and regulatory hurdles faced by Mimibox due to the company's global expansion.",
        tags: ['growth', 'resilience']
      },
      {
        timestamp: '00:19:44,159',
        summary:
          "Hyeongsuk expresses gratitude for the audience's participation and highlights the importance of networking and collaboration.",
        tags: ['networking', 'advice']
      }
    ]
  },
  {
    publisher: '82 Startup',
    title:
      '\bAltos Ventures \u1112\u1161\u11ab\u110f\u1175\u11b7 \u1103\u1162\u1111\u116d \ucc3d\uc5c5\uc2a4\ud1a0\ub9ac',
    year: '2019',
    videoId: 'GhsAGG3WbFs',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:00:00,280',
        summary:
          'Han Kim describes the structure of Altos Ventures and how the partners are equals who share everything.',
        tags: ['team', 'success']
      },
      {
        timestamp: '00:04:06,720',
        summary:
          'Han Kim talks about his early life in Chicago and his education at West Point.',
        tags: ['culture']
      },
      {
        timestamp: '00:05:21,400',
        summary:
          'Han Kim explains his reasons for applying to West Point, highlighting his desire for service and personal growth.',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:06:42,720',
        summary:
          'Han Kim reflects on the valuable lessons he learned at West Point and how the experience shaped his perspective on failure and resilience.',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:09:07,200',
        summary:
          'Han Kim shares a memorable episode from West Point that exemplifies the demanding nature of the academy and the importance of teamwork.',
        tags: ['resilience']
      },
      {
        timestamp: '00:14:26,519',
        summary:
          'Han Kim discusses the unique partnership structure at Altos Ventures, where profits are shared equally among partners, and how it encourages collaboration.',
        tags: ['team', 'advice']
      },
      {
        timestamp: '00:16:30,639',
        summary:
          'Han Kim talks about his time as an Army Corps of Engineers officer, his experience serving in Korea, and why he decided to transition out of the military.',
        tags: ['culture', 'language']
      },
      {
        timestamp: '00:18:29,159',
        summary:
          'Han Kim shares his experiences working at Procter & Gamble (P&G) and his realization that he was not well-suited for a corporate environment.',
        tags: ['culture', 'resilience']
      },
      {
        timestamp: '00:21:02,520',
        summary:
          'Han Kim explains how a chance encounter with a Harvard MBA student led him to apply to business school.',
        tags: ['networking', 'advice']
      },
      {
        timestamp: '00:22:41,279',
        summary:
          'Han Kim recounts his unconventional path to Stanford Business School and his initial struggles with interviews for investment banking roles.',
        tags: ['networking', 'language', 'resilience']
      },
      {
        timestamp: '00:24:43,279',
        summary:
          'Han Kim describes his uncertainty about his career path during his MBA and his decision to pursue consulting.',
        tags: ['advice']
      },
      {
        timestamp: '00:26:00,880',
        summary:
          'Han Kim explains how his experience at Booz Allen & Hamilton led him to the world of venture capital.',
        tags: ['networking']
      },
      {
        timestamp: '00:28:40,200',
        summary:
          'Han Kim explains his motivations for starting a venture capital fund, driven by a desire to test his abilities and build something of his own.',
        tags: ['success', 'resilience']
      },
      {
        timestamp: '00:29:14,559',
        summary:
          'Han Kim reflects on the dot-com bubble, the lessons learned from both successes and failures, and how Altos Ventures adapted its investment approach in the aftermath.',
        tags: ['fundraising', 'success', 'resilience']
      },
      {
        timestamp: '00:33:24,840',
        summary:
          'Han Kim discusses the challenges of raising their first institutional fund, emphasizing the importance of persistence, relationships, and learning from past mistakes.',
        tags: ['fundraising']
      },
      {
        timestamp: '00:37:20,880',
        summary:
          'Han Kim highlights the significance of maintaining positive relationships even after facing rejection from potential investors.',
        tags: ['networking', 'fundraising']
      },
      {
        timestamp: '00:38:34,640',
        summary:
          'Han Kim shares two memorable anecdotes from his fundraising experiences, illustrating the dedication and resilience required in the process.',
        tags: ['fundraising', 'resilience']
      },
      {
        timestamp: '00:42:07,920',
        summary:
          'Han Kim recounts an anecdote involving a Chanel family member who became a significant investor in Altos Ventures.',
        tags: ['fundraising', 'networking']
      },
      {
        timestamp: '00:44:23,280',
        summary:
          'Han Kim explains the factors that led Altos Ventures to shift its focus to the Korean market, including the influence of Jang Byung-Gyu and the success of Coupang.',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:45:49,400',
        summary:
          'Han Kim analyzes the unique characteristics of the Korean market, including its high population density, homogeneity, and relatively low customer acquisition costs.',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:50:06,319',
        summary:
          "Han Kim outlines Altos Ventures' strategy for investing in Korea, focusing on long-term investments, patient capital, and building lasting relationships with companies.",
        tags: ['growth', 'fundraising', 'advice']
      },
      {
        timestamp: '00:53:23,720',
        summary:
          'Han Kim acknowledges the role of venture capital in challenging societal norms and creating opportunities for success in Korea.',
        tags: ['success', 'advice']
      },
      {
        timestamp: '00:53:53,440',
        summary:
          "Han Kim discusses how Altos Ventures' existing relationships and reputation in the US market facilitated their entry into the Korean market, leading to investments from global players like Goldman Sachs.",
        tags: ['networking', 'fundraising']
      },
      {
        timestamp: '00:58:03,119',
        summary:
          "Han Kim provides insights into Altos Ventures' investment philosophy, emphasizing the importance of passion, problem-solving abilities, timing, and the founder's fit with the company.",
        tags: ['advice']
      },
      {
        timestamp: '01:01:19,559',
        summary:
          'Han Kim addresses the issue of disputes and challenges in startup investments, explaining how Altos Ventures prioritizes the well-being of founders and the importance of ethical decision-making.',
        tags: ['advice']
      }
    ]
  },
  {
    publisher: 'All That Matters',
    title:
      'ATM23 - Off the Charts with Chartmetric - the Option Shift Control Power Trends of 2023',
    year: '2023',
    videoId: '5BRog-ein9w',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,120',
        summary:
          'Bernie Cho introduces Sungmoon Cho and Chartmetric, a music data analytics company.',
        tags: ['success']
      },
      {
        timestamp: '00:02:28,280',
        summary:
          'Sungmoon Cho discusses his motivation for leaving Oracle to start Chartmetric.',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:06:12,120',
        summary:
          'Sungmoon Cho shares his experience pitching Chartmetric to Korean entertainment companies, including a challenging encounter with SM Entertainment.',
        tags: ['fundraising', 'networking']
      },
      {
        timestamp: '00:09:48,079',
        summary:
          "Sungmoon Cho explains Chartmetric's global reach and early adoption by artist managers.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:13:22,800',
        summary:
          'Sungmoon Cho discusses the concept of "trigger cities" and their role in the music industry.',
        tags: ['growth']
      },
      {
        timestamp: '00:16:21,880',
        summary:
          'Sungmoon Cho highlights emerging trends in Asian music, including collaborations and the rise of fandoms.',
        tags: ['growth', 'culture']
      },
      {
        timestamp: '00:18:20,200',
        summary:
          'Sungmoon Cho explains how Chartmetric helps analyze fan data and brand associations.',
        tags: ['growth']
      },
      {
        timestamp: '00:20:12,120',
        summary:
          'Sungmoon Cho discusses the acquisition of One Sheet and its benefits for artists.',
        tags: ['team', 'success']
      }
    ]
  },
  {
    publisher: 'EO',
    title: '10K Users from Product Launch Day 1 | TomoCredit Kristy Kim',
    year: '2024',
    videoId: 'JiSjMKptCKY',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,160',
        summary:
          'Kristy Kim, founder and CEO of TomoCredit, discusses the challenges immigrants face in building credit in the US and how TomoCredit helps them',
        tags: ['culture', 'immigration', 'resilience']
      },
      {
        timestamp: '00:01:00,879',
        summary:
          'Kristy shares her personal experiences of rejection as an immigrant due to lack of credit history and visa issues, which motivated her to start TomoCredit',
        tags: ['culture', 'immigration', 'resilience']
      },
      {
        timestamp: '00:02:54,560',
        summary:
          'Kristy highlights the initial steps of building TomoCredit, including networking with banking professionals and hiring engineers',
        tags: ['team', 'networking']
      },
      {
        timestamp: '00:03:39,159',
        summary:
          'Explanation of the FICO credit score system and its limitations for immigrants with no credit history',
        tags: ['immigration']
      },
      {
        timestamp: '00:05:19,960',
        summary:
          'Kristy emphasizes the importance of her initial naivety, which allowed her to pursue the idea of TomoCredit without being discouraged by the challenges',
        tags: ['resilience']
      },
      {
        timestamp: '00:06:54,319',
        summary:
          'Kristy describes the process of building the TomoCredit website and hiring a team',
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:07:41,680',
        summary:
          'The video explains how TomoCredit analyzes bank account data to assess creditworthiness and approve loans for individuals without credit scores',
        tags: ['success']
      },
      {
        timestamp: '00:09:31,200',
        summary:
          'TomoCredit initially took on the risk of lending to customers without credit scores as banks were hesitant to do so',
        tags: ['fundraising']
      },
      {
        timestamp: '00:10:26,360',
        summary:
          'TomoCredit now partners with banks by licensing its underwriting and TomoScore while ensuring customer data privacy',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:11:15,200',
        summary:
          "Kristy defends TomoCredit against criticism, emphasizing the company's commitment to helping immigrants and the positive impact of bringing more people into the credit ecosystem",
        tags: ['resilience']
      },
      {
        timestamp: '00:12:31,800',
        summary:
          'TomoCredit aims to empower immigrants and provide them with tools for financial success',
        tags: ['culture', 'success']
      },
      {
        timestamp: '00:14:46,480',
        summary:
          'Kristy shares advice for entrepreneurs, encouraging them to focus on their strengths and build a team with complementary skills',
        tags: ['advice', 'team']
      },
      {
        timestamp: '00:16:44,720',
        summary:
          "Kristy reiterates the importance of focusing on one's strengths and building a strong team",
        tags: ['advice', 'team']
      },
      {
        timestamp: '00:18:12,880',
        summary:
          "The video concludes with Kristy's vision for TomoCredit to become a leading brand that empowers immigrants and provides them with financial tools and support",
        tags: ['culture', 'success']
      }
    ]
  },
  {
    publisher: 'EO',
    title: 'Advice for the Future Entrepreneurs | Saeju Jeong (2/2)',
    year: '2022',
    videoId: 'PgdsItdmtMk',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'Saeju Jeong, CEO of Noom, shares his journey as an immigrant entrepreneur from South Korea to the US.',
        tags: ['culture', 'immigration', 'success']
      },
      {
        timestamp: '00:01:28,797',
        summary:
          'Jeong emphasizes the importance of having a strong mission and purpose for starting a company.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:02:40,118',
        summary:
          'Finding the right product-market fit takes time and requires a culture of testing and learning.',
        tags: ['advice', 'growth']
      },
      {
        timestamp: '00:03:29,542',
        summary:
          'Networking and surrounding yourself with positive, successful people is crucial for growth.',
        tags: ['networking', 'advice']
      },
      {
        timestamp: '00:04:20,176',
        summary:
          'Discipline and long-term thinking are common traits among successful people.',
        tags: ['advice', 'success']
      },
      {
        timestamp: '00:05:17,483',
        summary:
          'Jeong advocates for a healthy lifestyle and continuous self-improvement.',
        tags: ['advice']
      },
      {
        timestamp: '00:06:03,780',
        summary:
          'Advice for teenagers: Focus on core values and self-reflection rather than seeking validation through social media.',
        tags: ['advice']
      },
      {
        timestamp: '00:07:47,967',
        summary:
          'Advice for people in their twenties: Embrace continuous learning and explore different career paths.',
        tags: ['advice']
      },
      {
        timestamp: '00:08:41,895',
        summary:
          'Advice for people in their thirties: Avoid complacency, keep learning, and seek new challenges.',
        tags: ['advice']
      },
      {
        timestamp: '00:09:40,413',
        summary:
          'Being an immigrant offers a unique perspective and opportunities to identify problems and improve services.',
        tags: ['immigration', 'resilience']
      },
      {
        timestamp: '00:10:16,282',
        summary:
          'Belief in your mission is essential for overcoming challenges and achieving success.',
        tags: ['advice', 'resilience']
      }
    ]
  },
  {
    publisher: 'EO',
    title:
      'AI\ub85c \ub098\ub77c \uc9c0\ud0a4\ub358 \uacf5\ub300\uc0dd\ub4e4, 400\uc5b5 \ud22c\uc790 \ubc1b\uace0 \uc138\uacc4 1\uc704\uc5d0 \ub3c4\uc804\ud558\ub2e4 | \ud2b8\uc6f0\ube0c\ub7a9\uc2a4 \uc774\uc7ac\uc131',
    year: '2024',
    videoId: 'nCULYQQdz_QQ',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:00:00,839',
        summary:
          'Jae Seong Lee, CEO of Twelve Labs, discusses their journey in creating a multi-modal AI company.',
        tags: ['team', 'success']
      },
      {
        timestamp: '00:01:03,239',
        summary:
          'Jae Seong shares his childhood experience moving to the United States and the challenges of adapting to a new culture and language.',
        tags: ['culture', 'language']
      },
      {
        timestamp: '00:02:00,360',
        summary:
          "Jae Seong's passion for understanding the world leads him to pursue software engineering and statistics.",
        tags: ['resilience']
      },
      {
        timestamp: '00:02:27,200',
        summary:
          'Jae Seong reflects on his experience in the Korean military, where he met his co-founders and discovered the potential of AI.',
        tags: ['team', 'networking']
      },
      {
        timestamp: '00:03:33,840',
        summary:
          'Jae Seong and his co-founders start their entrepreneurial journey, fueled by their shared passion for AI and the desire to make a difference.',
        tags: ['team', 'fundraising']
      },
      {
        timestamp: '00:04:22,720',
        summary:
          "The team decides to build their AI company in Silicon Valley, aiming to leverage Korea's technical talent and compete on a global stage.",
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:05:31,520',
        summary:
          'Twelve Labs gains recognition in the AI community after winning the ICCV VALUE Challenge, proving their capabilities and attracting investors.',
        tags: ['success', 'fundraising']
      },
      {
        timestamp: '00:06:15,639',
        summary:
          'Jae Seong discusses the challenges of building a startup and the importance of taking risks and pursuing ambitious goals.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:07:10,400',
        summary:
          "Twelve Labs focuses on leveraging Korean talent for machine learning while utilizing Silicon Valley's expertise in interface design.",
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:07:43,800',
        summary:
          "Jae Seong expresses his hope for a future where AI is seamlessly integrated into everyday life, powered by Twelve Labs' technology.",
        tags: ['success', 'advice']
      }
    ]
  },
  {
    publisher: 'EO',
    title: 'He Didn\u2019t Make Money for 8 Years | Saeju Jeong (1/2)',
    year: '2022',
    videoId: 'ZHRLOnGdKIA',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'Saeju Jeong, the co-founder and CEO of Noom, discusses his journey as an immigrant entrepreneur in the digital healthcare industry.',
        tags: ['success', 'culture', 'immigration']
      },
      {
        timestamp: '00:00:52,427',
        summary:
          "Saeju's upbringing in South Korea and his early entrepreneurial endeavors, including a heavy metal record label, shaped his path.",
        tags: ['culture']
      },
      {
        timestamp: '00:02:15,593',
        summary:
          "Saeju's decision to move to New York City and the challenges he faced as an immigrant with limited English and no network.",
        tags: ['immigration', 'language', 'networking', 'resilience']
      },
      {
        timestamp: '00:03:18,239',
        summary:
          'The story of meeting his co-founder, Artem Petakov, and convincing him to leave Google and join Noom.',
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:04:15,755',
        summary:
          "Early fundraising efforts and the initial product iterations, including a Peloton-like stationary bike, that led to the development of Noom's app.",
        tags: ['fundraising', 'team', 'growth']
      },
      {
        timestamp: '00:05:07,432',
        summary:
          'The financial struggles and challenges of finding product-market fit, which eventually led to the creation of CardioTrainer.',
        tags: ['resilience', 'growth']
      },
      {
        timestamp: '00:05:43,801',
        summary:
          'The success of CardioTrainer and raising seed funding, followed by the realization that they needed to pivot towards a more holistic health approach.',
        tags: ['success', 'growth']
      },
      {
        timestamp: '00:06:15,958',
        summary:
          "The evolution of Noom's app and the integration of human coaches to provide a comprehensive behavior change platform.",
        tags: ['growth']
      },
      {
        timestamp: '00:07:05,716',
        summary:
          'The inspiration from the book "Good to Great" and the desire to build a long-lasting company with a focus on mission-driven individuals.',
        tags: ['advice', 'team', 'growth']
      },
      {
        timestamp: '00:08:15,036',
        summary:
          'The challenges of transitioning from a startup to a sustainable company and the importance of building a durable brand.',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:08:36,349',
        summary:
          'Saeju opens up about the self-doubt he experienced as an immigrant entrepreneur and the importance of being honest and seeking help.',
        tags: ['resilience', 'advice', 'culture']
      },
      {
        timestamp: '00:10:02,685',
        summary:
          "Saeju's evolving role as CEO with the growth of Noom and the focus on delegating tasks and empowering experienced executives.",
        tags: ['growth', 'team']
      },
      {
        timestamp: '00:10:38,554',
        summary:
          "The factors contributing to Noom's success, including timing, consumer trends, and the company's mission-driven approach.",
        tags: ['success', 'growth']
      },
      {
        timestamp: '00:11:20,137',
        summary:
          "Saeju's perspective on luck and the importance of perseverance and dedication in achieving success.",
        tags: ['advice', 'success']
      }
    ]
  },
  {
    publisher: 'EO',
    title: 'Things I Learned from 10 Years in Silicon Valley | Sisun Lee (1/2)',
    year: '2022',
    videoId: 'lWeiVX7PnEQ',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'Sisun reflects on the importance of resilience and grit in achieving success and finding inspiration in the hard work of others.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:00:43,501',
        summary:
          'Sisun discusses his educational background at the University of Waterloo, highlighting the co-op system that allowed him to gain practical experience.',
        tags: ['advice']
      },
      {
        timestamp: '00:01:01,686',
        summary:
          'Sisun shares his experience of dropping out of university and interning at Facebook as a data analyst, sparking his passion for the tech industry.',
        tags: ['advice']
      },
      {
        timestamp: '00:01:23,166',
        summary:
          'Sisun describes his role as a Rotational Product Manager (RPM) at Facebook, where he gained valuable experience working on projects in emerging markets like India and Southeast Asia.',
        tags: ['advice']
      },
      {
        timestamp: '00:01:42,936',
        summary:
          'Sisun recounts a memorable experience with his mentor at Facebook, who encouraged him to travel to Kenya to gain firsthand insights into the needs of users in remote areas.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:02:58,261',
        summary:
          'Sisun discusses his time as a Staff Product Manager at Tesla, where he worked on optimizing e-commerce growth and developing a product-driven referral model.',
        tags: ['advice', 'growth']
      },
      {
        timestamp: '00:03:41,554',
        summary:
          'Sisun emphasizes the importance of iteration and learning from mistakes in product management, highlighting the need for continuous improvement and adaptation.',
        tags: ['advice']
      },
      {
        timestamp: '00:04:25,348',
        summary:
          'Sisun shares the story behind the founding of Morelabs, a hangover recovery drink company, which began as a fun project inspired by his experiences in South Korea.',
        tags: ['success']
      },
      {
        timestamp: '00:05:06,848',
        summary:
          'Sisun discusses the early days of Morelabs and the decision to pursue the venture full-time with the support of investors and the potential for growth in the Western market.',
        tags: ['fundraising', 'success']
      },
      {
        timestamp: '00:05:22,238',
        summary:
          'Sisun describes the challenges and excitement of the first two years of Morelabs, marked by rapid growth, product issues, and the constant need for adaptation and problem-solving.',
        tags: ['growth', 'resilience']
      },
      {
        timestamp: '00:05:38,880',
        summary:
          "Sisun reflects on the decision to shift Morelabs' focus towards a technology-driven e-commerce model and the realization that this approach may not have been the best fit for the company's product.",
        tags: ['growth']
      },
      {
        timestamp: '00:06:19,420',
        summary:
          'Sisun discusses the impact of the COVID-19 pandemic on Morelabs, which led to a significant decline in revenue and forced the company to adapt its growth strategy.',
        tags: ['growth', 'resilience']
      },
      {
        timestamp: '00:06:51,077',
        summary:
          'Sisun shares the difficult decisions faced during the pandemic, including the possibility of layoffs and the need to prioritize ruthlessly to conserve cash flow.',
        tags: ['resilience']
      },
      {
        timestamp: '00:07:46,424',
        summary:
          'Sisun reiterates the importance of resilience and a mission-driven approach to overcome challenges and achieve success.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:08:38,392',
        summary:
          "Sisun discusses the decision to step down as CEO of Morelabs after raising Series B funding, recognizing the need for a leader with a different skillset to guide the company's transition to a retail-driven model.",
        tags: ['advice', 'growth']
      },
      {
        timestamp: '00:09:26,774',
        summary:
          "Sisun explains his decision to step down as CEO, acknowledging his own lack of passion for sales and marketing and the importance of finding the right leader for the company's future direction.",
        tags: ['advice']
      },
      {
        timestamp: '00:10:10,192',
        summary:
          'Sisun describes the transition process and the support he received from the board and the new CEO, ensuring a smooth handover and maintaining company morale.',
        tags: ['advice']
      },
      {
        timestamp: '00:10:22,621',
        summary:
          'Sisun reflects on the challenges of finding a new purpose after stepping down as CEO and the importance of exploration and self-discovery in navigating career transitions.',
        tags: ['advice', 'resilience']
      }
    ]
  },
  {
    publisher: 'EO',
    title: 'Why 90% of Startup CEOs Are Failing | John Kim Sendbird',
    year: '2023',
    videoId: 'aOGMymXPgrk',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:01,084',
        summary:
          'John Kim, founder and CEO of Sendbird, a leading Conversations platform, shares his insights on building a successful startup.',
        tags: ['success']
      },
      {
        timestamp: '00:00:20,103',
        summary:
          'Focusing on product-market fit is crucial in the early stages of a startup, and all other activities should be deprioritized until it is achieved.',
        tags: ['advice']
      },
      {
        timestamp: '00:01:40,892',
        summary:
          'Founders need to prioritize customer interaction, aiming for 3-5 conversations daily to understand their needs and validate product ideas.',
        tags: ['advice']
      },
      {
        timestamp: '00:02:28,398',
        summary:
          'Achieving product-market fit is the most important goal in the early stages of a startup, and all other activities should be secondary.',
        tags: ['advice']
      },
      {
        timestamp: '00:02:33,486',
        summary:
          "Sendbird's early days involved rapid iteration, with customer feedback implemented within 24-48 hours and new features released every two weeks.",
        tags: ['growth']
      },
      {
        timestamp: '00:03:29,918',
        summary:
          'Culture is a critical operating system for a company, representing its core values and influencing day-to-day decisions and execution.',
        tags: ['culture']
      },
      {
        timestamp: '00:04:34,274',
        summary:
          'John Kim emphasizes that culture is not just words on a wall but rather the actions and behaviors that employees live and breathe every day.',
        tags: ['culture']
      },
      {
        timestamp: '00:05:51,809',
        summary:
          'To achieve rapid growth, startups and individuals should seek guidance and mentorship from those who are one or two stages ahead of them.',
        tags: ['growth', 'advice']
      },
      {
        timestamp: '00:06:14,290',
        summary:
          'John Kim recommends identifying patterns of success by interviewing multiple individuals who have achieved greatness in the desired field.',
        tags: ['advice']
      },
      {
        timestamp: '00:07:19,147',
        summary:
          "John Kim's experience of achieving success with his first startup gave him the confidence to take risks and pursue ambitious goals with Sendbird.",
        tags: ['resilience', 'success']
      }
    ]
  },
  {
    publisher: 'EO',
    title: 'Why I Choose Web3 Rather Than Big Tech _ Sisun Lee (2/2)',
    year: '2022',
    videoId: 'fZT3_O2Uazk',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'Sisun introduces himself as a former product manager at Facebook, Uber, and Tesla, and the founder of Morelabs.',
        tags: ['success']
      },
      {
        timestamp: '00:00:10,051',
        summary:
          'Sisun discusses the impact of COVID-19 on Morelabs and his own journey of self-discovery.',
        tags: ['resilience']
      },
      {
        timestamp: '00:01:02,854',
        summary:
          'Sisun shares his passion for being around "trailblazers" and how it led him to explore the world of crypto and Web3.',
        tags: ['networking', 'culture']
      },
      {
        timestamp: '00:01:42,769',
        summary:
          'Sisun explains his fascination with the unique mentality and rapid community growth in the crypto space.',
        tags: ['growth']
      },
      {
        timestamp: '00:02:06,417',
        summary:
          'Sisun delves into the concept of network effects and how tokens revolutionize user onboarding and incentivization.',
        tags: ['growth', 'fundraising']
      },
      {
        timestamp: '00:03:43,223',
        summary:
          'Sisun expresses his conviction that the cultural shift brought by Web3 is the most significant opportunity of his lifetime.',
        tags: ['culture']
      },
      {
        timestamp: '00:03:57,654',
        summary:
          'Sisun reflects on missing out on the early wave of crypto in 2017 due to his focus on Morelabs and the abstract nature of the technology at the time.',
        tags: ['resilience']
      },
      {
        timestamp: '00:04:31,354',
        summary:
          'Sisun talks about the formation of the Wrapper team and the initial concept of making Web3 accessible to everyone.',
        tags: ['team']
      },
      {
        timestamp: '00:05:16,482',
        summary:
          'Sisun shares his personal experience with the complexities of using Metamask and other Web3 applications, highlighting the need for simplification.',
        tags: ['language']
      },
      {
        timestamp: '00:06:12,705',
        summary:
          'Sisun explains how Wrapper functions as a key management provider, offering a user-friendly interface to interact with blockchain technology.',
        tags: ['language']
      },
      {
        timestamp: '00:06:35,937',
        summary:
          'Sisun emphasizes the rapid pace of technological advancements and the potential for exponential growth in the Web3 space.',
        tags: ['growth']
      },
      {
        timestamp: '00:07:15,059',
        summary:
          "Sisun outlines Wrapper's goal of eliminating barriers to entry for Web3 applications and making them indistinguishable from non-blockchain apps.",
        tags: ['language']
      },
      {
        timestamp: '00:07:40,626',
        summary:
          'Sisun discusses the importance of developer feedback and rapid iteration in building a successful product.',
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:08:10,573',
        summary:
          'Sisun advocates for embracing high risk, high reward opportunities, particularly in emerging fields like blockchain.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:08:41,687',
        summary:
          'Sisun explains his deliberate decision to pursue an ambitious project with the potential for significant impact.',
        tags: ['advice']
      },
      {
        timestamp: '00:09:12,718',
        summary:
          'Sisun highlights the importance of having a bold and ambitious mission to attract talented individuals.',
        tags: ['team']
      },
      {
        timestamp: '00:09:43,374',
        summary:
          'Sisun defines entrepreneurship as solving unsolved problems and emphasizes the importance of resilience and grit.',
        tags: ['advice']
      }
    ]
  },
  {
    publisher: 'EO',
    title:
      '\ub300\ud559 \uc911\ud1f4 \ud6c4 \ucc3d\uc5c5, 11\ub144\uc744 \ubc84\ud2f0\uba70 \ube5b\uc744 \ubcf8 \uc9c0\uae08\uc5d0\uc57c \uae68\ub2ec\uc740 \uac83 | Allo \ud64d\uc6a9\ub0a8',
    year: '2023',
    videoId: 'bo5Z1ugNl5U',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'The speaker, Hong Yong-nam, founder of Allo, discusses the challenges and rewards of his entrepreneurial journey as an immigrant in the tech industry.',
        tags: ['immigration', 'resilience', 'advice']
      },
      {
        timestamp: '00:01:26,710',
        summary:
          'Hong Yong-nam reflects on his early days as a young entrepreneur, facing doubts and setbacks while pursuing his vision of remote work and globalized companies.',
        tags: ['team', 'resilience']
      },
      {
        timestamp: '00:04:51,440',
        summary:
          "Despite initial skepticism, Hong's company experiences early success with their online whiteboard service, BigCanvas, validating his belief in the future of remote work.",
        tags: ['success', 'resilience']
      },
      {
        timestamp: '00:05:33,780',
        summary:
          'Hong shares his experiences of cultural and language barriers upon arriving in the US, feeling like an outsider and facing challenges in daily interactions.',
        tags: ['culture', 'language', 'resilience']
      },
      {
        timestamp: '00:06:56,280',
        summary:
          "Hong's persistence and unique approach lead to recognition and success at Alchemist Accelerator, boosting his confidence and reinforcing the importance of focusing on his abilities rather than external validation.",
        tags: ['success', 'resilience']
      },
      {
        timestamp: '00:08:31,860',
        summary:
          "With the onset of the COVID-19 pandemic, Hong's company experiences significant growth but faces new challenges in understanding customer needs and adapting to the rapidly evolving remote work landscape.",
        tags: ['growth', 'team']
      },
      {
        timestamp: '00:10:36,120',
        summary:
          'Hong emphasizes the core values of Allo: visibility and transparency, enabling effective communication and collaboration in remote work environments.',
        tags: ['growth', 'team']
      },
      {
        timestamp: '00:12:19,500',
        summary:
          'Hong shares his philosophy on building a company culture that empowers individuals and leverages their strengths to achieve shared goals, fostering a sense of purpose and fulfillment.',
        tags: ['culture', 'team', 'growth']
      },
      {
        timestamp: '00:13:02,820',
        summary:
          'Hong concludes by encouraging aspiring entrepreneurs to focus on the intrinsic value and joy of pursuing their passions, rather than solely on external measures of success.',
        tags: ['advice', 'resilience']
      }
    ]
  },
  {
    publisher: 'EO',
    title:
      '\uc2e4\ub9ac\ucf58\ubc38\ub9ac 30\ub144 \ucc28\uac00 \uc694\uc998 \uc138\ub300\uc5d0\uac8c \uaf2d \ud574\uc8fc\uace0 \uc2f6\uc740 \uc774\uc57c\uae30\u3163\ud14c\uc77c\ud2b8\ub9ac \uc784\uc218\ubbf8',
    year: '2024',
    videoId: 'wPIm4cDTPO0',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:01:00,359',
        summary:
          'Introduction of Sumi, a 30-year resident of Silicon Valley with experience in large corporations and startups, and founder of TaleTree.',
        tags: ['networking', 'success']
      },
      {
        timestamp: '00:01:27,640',
        summary:
          "Sumi's childhood dream of coming to America, inspired by movies and a desire to work internationally.",
        tags: ['culture']
      },
      {
        timestamp: '00:03:05,360',
        summary:
          "Sumi's surprise at the tech-focused job market in Silicon Valley, leading her to learn about semiconductors despite her background in politics and French.",
        tags: ['networking', 'culture']
      },
      {
        timestamp: '00:04:20,079',
        summary:
          "Sumi's preferred learning style of conversation and her openness to asking questions, leading to friendships with colleagues.",
        tags: ['networking', 'team']
      },
      {
        timestamp: '00:05:19,639',
        summary:
          "Sumi's career progression in product and business development, emphasizing the importance of understanding the broader industry and building collaborative relationships.",
        tags: ['networking', 'growth']
      },
      {
        timestamp: '00:06:29,440',
        summary:
          'Sumi recounts a car accident in 2012 that led to a major spinal surgery and a long recovery period.',
        tags: ['resilience']
      },
      {
        timestamp: '00:07:27,639',
        summary:
          "Sumi's realization after the accident that her relationships with loved ones were more important than career achievements.",
        tags: ['resilience']
      },
      {
        timestamp: '00:08:35,320',
        summary:
          "Sumi's newfound appreciation for life and reduced stress levels after the accident.",
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:09:35,519',
        summary:
          "Sumi's observation of the changing culture in Silicon Valley, becoming more materialistic and competitive.",
        tags: ['culture']
      },
      {
        timestamp: '00:10:25,800',
        summary:
          'Sumi reflects on the importance of living a fulfilling life and not being driven by external standards or expectations.',
        tags: ['advice']
      },
      {
        timestamp: '00:12:25,440',
        summary:
          "Sumi's long recovery process and her time spent brainstorming ideas for working with children.",
        tags: ['resilience']
      },
      {
        timestamp: '00:13:29,199',
        summary:
          "Sumi's concern about the negative impact of technology on children and her desire to use technology for good.",
        tags: ['culture', 'advice']
      },
      {
        timestamp: '00:14:06,759',
        summary:
          'Sumi introduces TaleTree, a service that fosters creativity in children and helps them discover their passions through challenges and interactive sessions.',
        tags: ['success']
      },
      {
        timestamp: '00:15:19,440',
        summary:
          'Sumi encourages young adults to enjoy their current work while pursuing their interests and gradually building towards their goals.',
        tags: ['advice']
      },
      {
        timestamp: '00:15:53,480',
        summary:
          "Sumi's diverse career path and her belief that every step contributed to her current success.",
        tags: ['networking', 'success']
      },
      {
        timestamp: '00:16:35,519',
        summary:
          "Sumi dismisses age as a barrier to entrepreneurship and expresses her passion for TaleTree's mission.",
        tags: ['advice', 'resilience']
      }
    ]
  },
  {
    publisher: 'EO',
    title:
      '\uc5ec\uc218\uc758 \uc18c\ub144, \ub274\uc695\uc758 \uc790\uc218\uc131\uac00 \uc2e0\ud654\uac00 \ub418\ub2e4 [\uc815\uc138\uc8fc 1\ud3b8]',
    year: '2022',
    videoId: 'kAfYEtj8XaU',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          "Saeju Jung, cofounder of Noom, reflects on his entrepreneurial journey, starting with the pivotal moment of his father's illness and his subsequent decision to drop out of university and pursue business in the United States.",
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:02:07,200',
        summary:
          'Jung shares his early passion for heavy metal music and his first entrepreneurial venture: an e-commerce site selling imported heavy metal CDs.',
        tags: ['success']
      },
      {
        timestamp: '00:04:04,440',
        summary:
          "Jung discusses the profound impact of his father's passing and the existential questions it raised, leading him to reflect on the purpose of life and his desire to make a meaningful impact.",
        tags: ['resilience']
      },
      {
        timestamp: '00:06:08,280',
        summary:
          "Jung reveals his decision to drop out of university and his mother's unwavering support for his ambition to pursue business success in the United States.",
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:07:02,699',
        summary:
          'Jung recounts his arrival in New York City with limited funds and his experience navigating a new culture and language as he built connections and sought opportunities.',
        tags: ['immigration', 'language', 'networking', 'culture']
      },
      {
        timestamp: '00:08:36,958',
        summary:
          'Jung describes his role at KOTRA, assisting Korean companies with exporting their products, and the valuable lessons he learned about sales and understanding customer needs.',
        tags: ['networking', 'advice']
      },
      {
        timestamp: '00:10:45,240',
        summary:
          'Jung introduces his cofounder, Artem Petakov, highlighting their shared immigrant experiences and their alignment on a mission-driven approach to entrepreneurship.',
        tags: ['team', 'culture']
      },
      {
        timestamp: '00:12:03,060',
        summary:
          "Jung and Petakov's observations of the U.S. healthcare system's shortcomings inspire them to create Noom, focusing on user-centric solutions to chronic health issues.",
        tags: ['growth']
      },
      {
        timestamp: '00:13:11,040',
        summary:
          'Jung details the early challenges and failures of their initial venture, a smart bike for gyms, and the lessons learned about market fit and the financial limitations of the fitness industry.',
        tags: ['growth', 'fundraising']
      }
    ]
  },
  {
    publisher: 'EO',
    title:
      '\uc798\ub098\uac00\ub358 \ucee8\uc124\ud134\ud2b8\ub97c \ud3ec\uae30\ud558\uace0 \uc2e4\ub9ac\ucf58\ubc38\ub9ac\uc5d0\uc11c \ucc3d\uc5c5\ud558\uba70 \ubc30\uc6b4 \uac83\ub4e4',
    year: '2022',
    videoId: '79s67xl8a9M',
    lang: 'ko',
    chapters: [
      {
        timestamp: '00:01:08,000',
        summary:
          'Seunghun Lee discusses his early career goals and motivations, including his desire to work for prestigious companies and his decision to switch majors to business administration.',
        tags: ['success']
      },
      {
        timestamp: '00:01:21,060',
        summary:
          'He shares his experience working at Boston Consulting Group (BCG) and the influence of his peers who left to pursue entrepreneurship.',
        tags: ['success']
      },
      {
        timestamp: '00:02:04,560',
        summary:
          'Seunghun Lee explains his decision to pursue an MBA at Stanford University and the challenges he faced with the application process, particularly the essay questions that forced him to reflect on his life experiences.',
        tags: ['culture', 'resilience']
      },
      {
        timestamp: '00:02:57,959',
        summary:
          'He describes the competitive environment at Stanford and the culture of entrepreneurship, where many students were starting their own ventures.',
        tags: ['networking', 'culture']
      },
      {
        timestamp: '00:03:23,700',
        summary:
          'Seunghun Lee reflects on the challenges he faced as a non-native English speaker and the impact it had on his confidence and self-esteem.',
        tags: ['language', 'resilience']
      },
      {
        timestamp: '00:04:48,720',
        summary:
          'He talks about the founding of Ringle, an online English language learning platform, and the initial motivation behind it, which was to address the language barrier challenges he and others had experienced.',
        tags: ['team', 'language']
      },
      {
        timestamp: '00:05:42,300',
        summary:
          "Seunghun Lee explains the early stages of Ringle's development, including testing the platform using external tools and gathering tutors from Stanford's student body.",
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:06:32,400',
        summary:
          "He discusses Ringle's transition to a paid service and the importance of user feedback in shaping the product and business model.",
        tags: ['growth', 'fundraising']
      },
      {
        timestamp: '00:07:44,039',
        summary:
          'Seunghun Lee shares his experience with fundraising and the decision to accept only 50% of the initial angel investment offer to focus on product development.',
        tags: ['fundraising', 'growth']
      },
      {
        timestamp: '00:08:27,539',
        summary:
          "He emphasizes the significance of user experience (UX) and the challenges they faced with the platform's design and usability.",
        tags: ['growth']
      },
      {
        timestamp: '00:09:05,519',
        summary:
          "Seunghun Lee reiterates Ringle's mission of solving the English language barrier problem and their commitment to creating a valuable service for users.",
        tags: ['language', 'growth']
      },
      {
        timestamp: '00:09:39,320',
        summary:
          "He discusses Ringle's funding rounds and the company's growth trajectory, including their decision to reduce advertising spending during the COVID-19 pandemic.",
        tags: ['fundraising', 'growth']
      },
      {
        timestamp: '00:10:53,100',
        summary:
          'Seunghun Lee shares his insights on the importance of alignment within a company, from vision and product to people and systems, and the challenges of maintaining that alignment as the company scales.',
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:11:51,839',
        summary:
          "He emphasizes Ringle's focus on product excellence and user satisfaction over short-term financial gains.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:12:17,040',
        summary:
          "Seunghun Lee attributes Ringle's success to their consistent communication with users and their commitment to understanding their needs.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:12:49,200',
        summary:
          'He reflects on the challenges and rewards of entrepreneurship and his personal growth throughout the journey.',
        tags: ['advice', 'resilience']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title: '\u2018Getting Together\u2019 with Coffee Meets Bagel',
    year: '2020',
    videoId: 'qwCQsZwVASQ',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,320',
        summary:
          'Dawoon Kang, cofounder of Coffee Meets Bagel, is introduced and welcomes the audience.',
        tags: ['team', 'success']
      },
      {
        timestamp: '00:01:01,359',
        summary:
          'Dawoon shares her personal journey as an immigrant from Korea and how her strong bond with her sisters led them to start a business together.',
        tags: ['culture', 'team', 'immigration']
      },
      {
        timestamp: '00:02:40,800',
        summary:
          'Dawoon explains that growing up in an entrepreneurial family inspired her and her sisters to pursue their own venture.',
        tags: ['culture', 'team', 'advice']
      },
      {
        timestamp: '00:04:20,399',
        summary:
          'The idea for Coffee Meets Bagel arose from a need for a dating app focused on quality matches and long-term relationships.',
        tags: ['team', 'success', 'advice']
      },
      {
        timestamp: '00:05:21,520',
        summary:
          'Coffee Meets Bagel was designed for busy young professionals seeking meaningful connections, emphasizing quality over quantity.',
        tags: ['success', 'advice']
      },
      {
        timestamp: '00:07:13,120',
        summary:
          'The name "Coffee Meets Bagel" reflects the app\'s model of delivering curated matches daily, like a coffee break treat.',
        tags: ['success']
      },
      {
        timestamp: '00:08:14,080',
        summary:
          "Coffee Meets Bagel's target audience has always been young professionals seeking long-term relationships, with a strong user base organically growing within the Asian American community.",
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:10:03,279',
        summary:
          "Dawoon shares her personal positive experiences using Coffee Meets Bagel, highlighting the app's effectiveness in facilitating meaningful connections.",
        tags: ['success', 'advice']
      },
      {
        timestamp: '00:12:04,720',
        summary:
          'Dawoon encourages a shift in dating mindset, emphasizing that relationships, even those that end, can be considered successful for personal growth.',
        tags: ['advice']
      },
      {
        timestamp: '00:12:54,240',
        summary:
          "The impact of COVID-19 on the dating landscape and Coffee Meets Bagel's business is discussed, including the accelerated adoption of video dating.",
        tags: ['growth', 'advice']
      },
      {
        timestamp: '00:16:00,240',
        summary:
          'Dawoon addresses concerns about virtual dating, emphasizing the benefits of building emotional connections before physical meetups.',
        tags: ['advice']
      },
      {
        timestamp: '00:18:31,919',
        summary:
          'Coffee Meets Bagel adapted to the pandemic by introducing features like "Coffee Talk," a virtual hangout space for daters to connect.',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:19:14,720',
        summary:
          'Dawoon describes the challenges of navigating the pandemic as a business owner, prioritizing employee well-being, profitability, and adapting to uncertainty.',
        tags: ['team', 'growth', 'resilience']
      },
      {
        timestamp: '00:23:20,240',
        summary:
          "Dawoon emphasizes the importance of surrendering to factors outside one's control, focusing on manageable aspects, and fostering a strong team culture.",
        tags: ['team', 'culture', 'resilience', 'advice']
      },
      {
        timestamp: '00:26:14,080',
        summary:
          "The pandemic strengthened Coffee Meets Bagel's team culture, leading to high employee satisfaction and low turnover despite the challenges.",
        tags: ['team', 'culture', 'success', 'resilience']
      },
      {
        timestamp: '00:27:40,720',
        summary:
          'Dawoon believes the pandemic highlighted the need for businesses to be flexible and adaptable to changing circumstances.',
        tags: ['growth', 'resilience', 'advice']
      },
      {
        timestamp: '00:28:50,960',
        summary:
          'Dawoon explains her personal connection to Hawaii and discusses the challenges and opportunities of leading a remote team.',
        tags: ['team', 'culture', 'resilience']
      },
      {
        timestamp: '00:30:04,960',
        summary:
          'The importance of building a culture of trust for successful remote work is emphasized.',
        tags: ['team', 'culture', 'advice']
      },
      {
        timestamp: '00:33:00,559',
        summary:
          'Dawoon predicts that virtual connections will remain integral to dating, and more daters will prioritize long-term relationships.',
        tags: ['growth', 'advice']
      },
      {
        timestamp: '00:34:50,800',
        summary:
          'Dawoon believes the pandemic underscored the importance of strong company cultures and adaptability for businesses to navigate future changes.',
        tags: ['growth', 'culture', 'resilience', 'advice']
      },
      {
        timestamp: '00:36:12,720',
        summary:
          'A discussion about factors that make a city "easy to date in," primarily focusing on perceived gender ratios and daters\' openness to connecting.',
        tags: ['advice']
      },
      {
        timestamp: '00:38:41,599',
        summary:
          'Dawoon shares her experience transitioning from a corporate career to entrepreneurship, emphasizing the importance of aligning passions with career choices.',
        tags: ['culture', 'advice']
      },
      {
        timestamp: '00:40:19,040',
        summary:
          'Dawoon recommends using a "regret minimization model" to make major life decisions, encouraging individuals to pursue paths they won\'t regret later.',
        tags: ['advice']
      },
      {
        timestamp: '00:41:52,800',
        summary:
          "The importance of self-reflection, listening to one's intuition, and overcoming the fear of change is highlighted.",
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:42:40,720',
        summary:
          'Dawoon suggests setting a timeline for pursuing entrepreneurial goals to manage risk and uncertainty, allowing individuals to return to previous careers if needed.',
        tags: ['advice']
      },
      {
        timestamp: '00:43:41,920',
        summary:
          'Dawoon concludes by reiterating the significance of self-awareness and staying true to personal values when making life choices.',
        tags: ['advice']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title:
      'Charting Entrepreneurial Paths - Curtis Lee - from Luxe to Pinwheel and Beyond',
    year: '2024',
    videoId: 'WmafOtVafpg',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary: 'Introduction of Curtis Lee and the event sponsor',
        tags: ['fundraising']
      },
      {
        timestamp: '00:03:12,799',
        summary: "Curtis Lee's journey from LA to New York",
        tags: ['culture']
      },
      {
        timestamp: '00:04:06,200',
        summary: "Curtis Lee's education and early career choices",
        tags: ['culture']
      },
      {
        timestamp: '00:08:10,720',
        summary:
          "The turning point in Curtis Lee's career - his grandmother's passing",
        tags: ['resilience']
      },
      {
        timestamp: '00:11:11,920',
        summary:
          'Transition to Silicon Valley and experiences at Google, Zinga, and Groupon',
        tags: ['team', 'networking']
      },
      {
        timestamp: '00:12:03,040',
        summary: 'Founding and the concept behind Lux Valet',
        tags: ['success', 'advice']
      },
      {
        timestamp: '00:14:09,959',
        summary: 'Founding Pinwheel, a payroll data API company',
        tags: ['success', 'advice']
      },
      {
        timestamp: '00:16:41,320',
        summary: "Curtis Lee's approach to finding new business ideas",
        tags: ['advice']
      },
      {
        timestamp: '00:17:15,720',
        summary: 'Balancing roles at Pinwheel and Microsoft',
        tags: ['advice', 'growth']
      },
      {
        timestamp: '00:18:05,799',
        summary: 'The challenges and emotional toll of being a startup founder',
        tags: ['resilience']
      },
      {
        timestamp: '00:19:29,039',
        summary: "Lux's success and acquisition by Volvo",
        tags: ['success']
      },
      {
        timestamp: '00:22:35,720',
        summary: 'The decision to exit Lux and transition to investing',
        tags: ['advice', 'success']
      },
      {
        timestamp: '00:24:22,520',
        summary: "Curtis Lee's motivation for becoming an investor",
        tags: ['advice']
      },
      {
        timestamp: '00:26:41,320',
        summary: 'Lessons learned from Lux and applied to Pinwheel',
        tags: ['advice', 'growth']
      },
      {
        timestamp: '00:29:05,919',
        summary: 'The importance of market in startup success',
        tags: ['advice']
      },
      {
        timestamp: '00:30:07,640',
        summary:
          "How experiences from both sides of Curtis's career have shaped him",
        tags: ['advice']
      },
      {
        timestamp: '00:33:57,760',
        summary: 'Finding and identifying good co-founders',
        tags: ['team', 'advice']
      },
      {
        timestamp: '00:37:49,720',
        summary:
          'Advantages of pursuing a non-entrepreneurial career before becoming a founder',
        tags: ['advice', 'networking']
      },
      {
        timestamp: '00:38:55,880',
        summary: 'The importance of selling in entrepreneurship',
        tags: ['advice']
      },
      {
        timestamp: '00:40:57,880',
        summary: 'Advice for aspiring founders in established careers',
        tags: ['advice']
      },
      {
        timestamp: '00:42:32,280',
        summary:
          'The "underdog mentality" and its impact on Curtis Lee\'s journey',
        tags: ['culture', 'resilience']
      },
      {
        timestamp: '00:45:42,319',
        summary: "Curtis Lee's personal vision for the future",
        tags: ['culture']
      },
      {
        timestamp: '00:46:50,079',
        summary: 'Q&A session begins',
        tags: ['advice']
      },
      {
        timestamp: '00:50:46,000',
        summary: 'Discussion on the value of an MBA',
        tags: ['advice', 'networking']
      },
      {
        timestamp: '00:54:18,799',
        summary: 'How to manage stress as a founder',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:55:57,799',
        summary: 'The value of education for entrepreneurs',
        tags: ['advice']
      },
      {
        timestamp: '00:57:22,119',
        summary: 'Maintaining conviction in your idea despite self-doubt',
        tags: ['resilience']
      },
      {
        timestamp: '01:00:34,160',
        summary: 'Advice for aspiring entrepreneurs',
        tags: ['advice']
      },
      {
        timestamp: '01:02:21,960',
        summary:
          "Learning to control what you can and let go of what you can't",
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '01:04:05,839',
        summary:
          'Compassionate leadership and sharing success with former employees',
        tags: ['team', 'resilience']
      },
      {
        timestamp: '01:06:37,960',
        summary: 'Responding to the family of the deceased Lux employee',
        tags: ['resilience']
      },
      {
        timestamp: '01:08:22,439',
        summary: 'Problem-solving and pivoting after losing the Hertz deal',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '01:11:08,120',
        summary: 'Balancing business decisions with human empathy',
        tags: ['advice']
      },
      {
        timestamp: '01:13:31,920',
        summary: 'Learning opportunities at big corporations vs. startups',
        tags: ['growth', 'advice']
      },
      {
        timestamp: '01:15:14,719',
        summary: 'Finding and identifying good mentors',
        tags: ['advice', 'networking']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title:
      'Edtech - Consumer Technology in the Digital Age - a Conversation with Edmodo CEO Susan Kim',
    year: '2021',
    videoId: '4NSe0EXXB9s',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,880',
        summary:
          "Introduction of Korea Society's Young Professionals webcast and speakers.",
        tags: ['networking']
      },
      {
        timestamp: '00:02:59,200',
        summary:
          'Susan Kim shares her personal story, starting from her upbringing as a Korean immigrant in the US.',
        tags: ['culture', 'immigration', 'resilience']
      },
      {
        timestamp: '00:07:58,240',
        summary:
          'Discusses the social pressures faced as a Korean-American, both internally and externally.',
        tags: ['culture', 'resilience']
      },
      {
        timestamp: '00:13:20,240',
        summary:
          'Susan talks about her career path, starting with her first job at a tech startup and subsequent experiences during the dot-com boom.',
        tags: ['team', 'growth', 'success']
      },
      {
        timestamp: '00:19:51,039',
        summary:
          'She explains her transition to Edmodo, highlighting her leadership roles at Google, Plum District, and Eatwith.',
        tags: ['team', 'growth', 'success']
      },
      {
        timestamp: '00:28:14,559',
        summary:
          "Susan discusses Edmodo's journey, its business model, and the challenges and opportunities in the edtech market, particularly during and post-COVID.",
        tags: ['fundraising', 'team', 'growth']
      },
      {
        timestamp: '00:36:02,560',
        summary:
          'Susan shares advice for young professionals, emphasizing scrappiness, persistence, and the importance of learning from talented individuals.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '00:42:42,960',
        summary:
          'Discusses the value of professional services experience before entering the tech industry and encourages finding areas of genuine interest.',
        tags: ['advice', 'networking']
      },
      {
        timestamp: '00:50:14,800',
        summary:
          'Susan offers insights on the future of work, encouraging young professionals to seek in-office experiences for learning and networking opportunities.',
        tags: ['advice', 'networking', 'growth']
      },
      {
        timestamp: '00:54:27,440',
        summary:
          'She shares personal practices that have made her a better leader, emphasizing the importance of letting go of control, validating others, and fostering positive reinforcement.',
        tags: ['advice', 'resilience']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title:
      'Future of Fintech - Technological Advancements and Disruption of Incumbents',
    year: '2018',
    videoId: 'SwsUxt1C9O8',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'Introductions of Gary Miller, Wilson Lin, and Dan Kraut, experts in finance and technology.',
        tags: ['fundraising', 'networking', 'team', 'growth']
      },
      {
        timestamp: '00:04:23,120',
        summary:
          'Discussion on opportunities for innovation and disruption in financial services, including streamlining processes and improving customer experience.',
        tags: ['advice', 'success']
      },
      {
        timestamp: '00:10:49,120',
        summary:
          'Exploring the challenges and strategies for fintech companies to navigate a regulated environment and gain credibility.',
        tags: ['advice', 'immigration']
      },
      {
        timestamp: '00:17:10,000',
        summary:
          'Conversation about cutting-edge technologies like blockchain and AI and their impact on financial services.',
        tags: ['growth', 'success']
      },
      {
        timestamp: '00:28:01,660',
        summary:
          'Identifying overlooked but critical aspects in fintech opportunities, such as security considerations and the need for capital.',
        tags: ['fundraising', 'advice']
      },
      {
        timestamp: '00:32:29,410',
        summary:
          'Predictions for the fintech landscape in five years, highlighting the merging of human and machine, digital identity, and price compression.',
        tags: ['growth', 'advice', 'success']
      },
      {
        timestamp: '00:41:54,090',
        summary:
          'Comparing legacy systems in banking and investing, noting the challenges banks face in integration and keeping up with technological advancements.',
        tags: ['growth', 'advice']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title: 'K-Startups - Empowering the Future of Young Entrepreneurs',
    year: '2022',
    videoId: 'N-E08xtJswo',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:00:00,000',
        summary:
          'Introduction and welcome to the K Startups Empowering the Future of Young Entrepreneurs event.',
        tags: ['networking']
      },
      {
        timestamp: '00:00:43,120',
        summary:
          'Introduction of the speakers: Ryan Kim, founder and CEO of Kimchi Market; So, managing director of KITA New York; and Jun, vice president of Korean Startups and Entrepreneurs (KSC).',
        tags: ['networking', 'team']
      },
      {
        timestamp: '00:03:23,920',
        summary:
          'Welcoming remarks from the moderator, Hang Li, president and CEO of Vega X Holdings and KSC president.',
        tags: ['networking']
      },
      {
        timestamp: '00:03:46,959',
        summary:
          'Jun discusses his role as co-founder and CTO of Culinary Agents, a platform connecting hospitality professionals with jobs.',
        tags: ['team', 'networking', 'success']
      },
      {
        timestamp: '00:05:20,720',
        summary:
          'So introduces KITA, a trade organization supporting Korean businesses, and its recent focus on supporting K startups in the US.',
        tags: ['networking', 'growth']
      },
      {
        timestamp: '00:06:22,880',
        summary:
          'Ryan Kim introduces himself as founder and CEO of Kimchi Market, a premium online Korean food marketplace.',
        tags: ['team', 'success']
      },
      {
        timestamp: '00:08:24,479',
        summary:
          'Discussion on the current state of Korean and Korean-American founded startups, highlighting their growth but noting a need for scaling up investments.',
        tags: ['fundraising', 'growth']
      },
      {
        timestamp: '00:11:25,760',
        summary:
          'Jun and So discuss various programs available to Korean startups, emphasizing the role of KITA, KSC, and government support.',
        tags: ['networking', 'advice', 'growth']
      },
      {
        timestamp: '00:14:59,120',
        summary:
          "Transition to Ryan Kim's experience and advice on starting a business, highlighting the importance of market size, delivery strategy, and financing.",
        tags: ['advice', 'fundraising', 'resilience']
      },
      {
        timestamp: '00:16:20,160',
        summary:
          'Ryan shares his personal journey with Kimchi Market, emphasizing the need to define and answer key business questions before starting.',
        tags: ['advice', 'resilience', 'success']
      },
      {
        timestamp: '00:19:01,919',
        summary:
          'Ryan stresses the importance of identifying a pain point and starting with a small, achievable vision before expanding.',
        tags: ['advice', 'resilience', 'growth']
      },
      {
        timestamp: '00:21:04,480',
        summary:
          'Discussion on fundraising strategies for startups, with Jun emphasizing the significance of networking, investor introductions, and having a strong pitch deck.',
        tags: ['fundraising', 'networking', 'advice']
      },
      {
        timestamp: '00:24:16,720',
        summary:
          'Jun details his investment approach and the importance of building a network and presenting a fundable business.',
        tags: ['fundraising', 'networking', 'advice']
      },
      {
        timestamp: '00:26:42,400',
        summary:
          'Discussion on Korean companies scaling globally, with So highlighting the importance of adapting to the US market and improving pitch style and delivery.',
        tags: ['growth', 'advice', 'language']
      },
      {
        timestamp: '00:28:51,520',
        summary:
          'Jun and Ryan emphasize the need for localization when going global, using examples of adapting to different cultural contexts.',
        tags: ['growth', 'culture', 'language']
      },
      {
        timestamp: '00:31:03,279',
        summary:
          'Discussion on the Korean brand and its competitiveness in the US market, focusing on opportunities in the K-beauty and K-food sectors.',
        tags: ['growth', 'success', 'culture']
      },
      {
        timestamp: '00:35:04,400',
        summary:
          'Discussion on the post-pandemic environment for startups, with So noting increased entrepreneurial activity and Jun highlighting the growth of e-commerce.',
        tags: ['growth', 'advice']
      },
      {
        timestamp: '00:41:25,560',
        summary:
          'Audience Q&A: defining K startups and discussing the benefits of starting a business in New York City.',
        tags: ['networking', 'advice']
      },
      {
        timestamp: '00:45:16,960',
        summary:
          'Audience Q&A: advice on getting initial customer interest for a product, emphasizing uniqueness, value proposition, and product-market fit.',
        tags: ['advice', 'growth', 'resilience']
      },
      {
        timestamp: '00:51:23,520',
        summary:
          'Audience Q&A: discussion on growing a business without a dedicated sales team, highlighting the importance of strong content, customer experience, and unorthodox marketing.',
        tags: ['growth', 'advice', 'resilience']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title: 'Meet the Leaders of Venture Capital',
    year: '2022',
    videoId: 'cUmrKbLiOeo',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:01:26,640',
        summary:
          'Introduction of the panelists, Bernard Moon from SparkLabs Group, John Nam from Strong Ventures, and moderator Eddie Lee from Y Combinator.',
        tags: ['fundraising', 'networking', 'success']
      },
      {
        timestamp: '00:04:37,620',
        summary:
          'Panelists provide overviews of their respective firms, SparkLabs Group and Strong Ventures, highlighting their focus on supporting startups globally, particularly those founded by Koreans.',
        tags: ['fundraising', 'growth', 'advice']
      },
      {
        timestamp: '00:07:41,759',
        summary:
          'Discussion on defining success for their firms, emphasizing both financial returns and the reputation built by helping portfolio companies thrive.',
        tags: ['fundraising', 'success', 'resilience']
      },
      {
        timestamp: '00:11:09,839',
        summary:
          'Panelists reflect on the most crucial aspects of their past experiences that paved their way into venture capital, including entrepreneurial ventures and diverse professional backgrounds.',
        tags: ['networking', 'advice']
      },
      {
        timestamp: '00:16:42,959',
        summary:
          'John Nam and Bernard Moon discuss essential skillsets for success in venture capital, emphasizing the importance of people skills, the ability to synthesize information, and learn from both failures and successes.',
        tags: ['advice', 'networking', 'resilience']
      },
      {
        timestamp: '00:20:05,280',
        summary:
          'Conversation on how the venture capital landscape is evolving post-COVID, with John Nam highlighting the return to in-person interactions and Bernard Moon noting the surge in deals during the pandemic.',
        tags: ['fundraising', 'networking']
      },
      {
        timestamp: '00:27:14,820',
        summary:
          "Bernard Moon outlines SparkLabs Group's approach to due diligence, emphasizing assessing team dynamics and conducting thorough reference checks.",
        tags: ['team', 'advice', 'fundraising']
      },
      {
        timestamp: '00:29:29,640',
        summary:
          "John Nam shares Strong Ventures' due diligence process, focusing on evaluating character, execution capabilities, fundraising potential, and the composition of the cap table.",
        tags: ['team', 'fundraising', 'advice']
      },
      {
        timestamp: '00:33:20,340',
        summary:
          "Eddie Lee discusses Y Combinator's focus on assessing founders' ability to build a scalable team and create a culture of excellence within their organizations.",
        tags: ['team', 'growth', 'culture']
      },
      {
        timestamp: '00:34:35,280',
        summary:
          'Panelists share examples of investment decisions where they misjudged the team, emphasizing the importance of thorough due diligence and recognizing red flags.',
        tags: ['team', 'advice', 'resilience']
      },
      {
        timestamp: '00:40:13,920',
        summary:
          'Discussion shifts to the aspects of working with portfolio company founders that the panelists find most rewarding, highlighting supporting companies through various growth stages.',
        tags: ['growth', 'advice', 'fundraising']
      },
      {
        timestamp: '00:45:22,560',
        summary:
          'Panelists discuss their observations on working with Korean and Korean American founders, acknowledging the need for increased hustle and support within the diaspora.',
        tags: ['networking', 'culture', 'resilience']
      },
      {
        timestamp: '00:58:02,460',
        summary:
          'Concluding remarks with advice for aspiring founders and venture capitalists, emphasizing the importance of taking action, learning from failures, and seeking support from mentors.',
        tags: ['advice', 'resilience', 'networking']
      },
      {
        timestamp: '1:01:09,839',
        summary:
          'An audience member asks about potential disadvantages faced by Korean founders and how to overcome those hurdles, prompting a lively discussion about diversity, self-awareness, and the evolving landscape of venture capital.',
        tags: ['fundraising', 'networking', 'culture']
      },
      {
        timestamp: '1:14:41,340',
        summary:
          'Another audience member raises a question about the advantages of cross-border operations between Korea and the U.S., leading to a discussion about leveraging Korean talent in areas like gaming and technology.',
        tags: ['team', 'growth', 'culture']
      },
      {
        timestamp: '1:15:12,719',
        summary:
          'Discussion on the differences between the Web2 and Web3 spaces, the role of retail investors in Korea, and the potential for Korean entrepreneurs to capitalize on the global popularity of Korean culture and products.',
        tags: ['fundraising', 'culture', 'growth']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title: 'Passion in Entrepreneurship - Aligning Vision and Passion',
    year: '2019',
    videoId: '1yo4ApBPdYU',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:04:42,310',
        summary:
          'Selena talks about her childhood, education, and career path.',
        tags: ['culture', 'language', 'resilience']
      },
      {
        timestamp: '00:14:37,870',
        summary:
          'Robert shares his childhood experiences and how his upbringing shaped his passion for helping the hungry.',
        tags: ['culture', 'resilience']
      },
      {
        timestamp: '00:17:55,010',
        summary:
          'Robert explains how the club at NYU worked to deliver leftover food to homeless shelters.',
        tags: ['team', 'success']
      },
      {
        timestamp: '00:22:18,780',
        summary:
          'Selena talks about her turning point of quitting her corporate law job to pursue her passion.',
        tags: ['resilience', 'success']
      },
      {
        timestamp: '00:33:55,770',
        summary:
          'Robert shares his experience of gradually building his social business while working at JPMorgan.',
        tags: ['team', 'growth']
      },
      {
        timestamp: '00:43:50,730',
        summary:
          'Selena discusses her transition to becoming a career coach and the difference in mindset between Korean Americans and Caucasians regarding career development.',
        tags: ['culture', 'advice']
      },
      {
        timestamp: '00:47:08,830',
        summary:
          'Robert explains the financial model of Rescuing Leftover Cuisine and its impact on food rescue.',
        tags: ['fundraising', 'growth', 'success']
      },
      {
        timestamp: '00:51:51,130',
        summary:
          'The moderator asks a question about overcoming the stage when passion fades and grit and responsibility remain.',
        tags: ['advice']
      },
      {
        timestamp: '00:53:07,600',
        summary:
          'Robert shares his perspective on passion and the importance of systematic behavior in entrepreneurship.',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:56:00,680',
        summary:
          'Selena emphasizes the importance of finding joy in the work even when passion fades and highlights the systemic approach to achieving goals.',
        tags: ['resilience', 'advice']
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title: 'Saeju Jeong - An Unwavering Visionary behind Noom',
    year: '2024',
    videoId: 'iEY_V-i9XFk',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:07:20,000',
        summary: 'Overview of Noom, its success, and business model.',
        tags: ['success']
      },
      {
        timestamp: '00:10:10,000',
        summary:
          "Saeju's journey of becoming an entrepreneur, including his early ventures and his motivation for founding Noom.",
        tags: ['culture', 'resilience', 'advice']
      },
      {
        timestamp: '00:21:50,000',
        summary:
          "Saeju's experience moving to New York with limited resources and his advice for immigrant entrepreneurs.",
        tags: ['immigration', 'language', 'networking', 'resilience', 'advice']
      },
      {
        timestamp: '00:31:12,000',
        summary:
          'How Saeju met his co-founder, Ardam Pacov, and the beginning of their partnership.',
        tags: ['team', 'networking']
      },
      {
        timestamp: '00:34:05,000',
        summary:
          "Noom's initial business model as an interactive stationary bike and the challenges they faced.",
        tags: ['team', 'success']
      },
      {
        timestamp: '00:35:45,000',
        summary:
          "Noom's pivots to a mobile application and the strategic decisions behind them.",
        tags: ['growth', 'resilience', 'advice']
      },
      {
        timestamp: '00:39:15,000',
        summary:
          "Saeju's leadership principles and how they helped him navigate difficult times.",
        tags: ['growth', 'resilience', 'advice']
      },
      {
        timestamp: '00:45:00,000',
        summary:
          "Saeju's insights on fundraising and the changing landscape of the tech VC market.",
        tags: ['fundraising', 'growth']
      },
      {
        timestamp: '00:47:50,000',
        summary:
          "Saeju's most memorable pitch, which saved Noom from bankruptcy.",
        tags: ['fundraising', 'resilience', 'success']
      },
      {
        timestamp: '01:00:00,000',
        summary: 'Importance of mission and purpose in entrepreneurship.',
        tags: ['advice', 'resilience']
      },
      {
        timestamp: '01:02:20,000',
        summary:
          "Saeju's transition from CEO to Executive Chair and his new goals for Noom.",
        tags: ['growth', 'team', 'advice']
      },
      {
        timestamp: '01:08:00,000',
        summary:
          "Q&A session with the audience, covering topics like passion vs. profit, continuing education, Noom's name origin, the current state of the startup industry, Saeju's future plans, balancing shareholder interests with company mission, Noom's greatest threats, and his favorite heavy metal bands.",
        tags: [
          'fundraising',
          'networking',
          'culture',
          'team',
          'language',
          'growth',
          'resilience',
          'advice',
          'success'
        ]
      }
    ]
  },
  {
    publisher: 'The Korea Society',
    title: 'Young Professionals\u2019 Network - K-Startup NY Mentoring Day',
    year: '2023',
    videoId: '1-iLKUuk9Jo',
    lang: 'en',
    chapters: [
      {
        timestamp: '00:05:00,240',
        summary:
          'David, Ryan, and Grace introduce themselves and their companies',
        tags: ['team', 'success']
      },
      {
        timestamp: '00:12:47,700',
        summary:
          'Discussion on the challenges of fundraising and how to kickstart a business',
        tags: ['fundraising', 'resilience']
      },
      {
        timestamp: '00:20:17,400',
        summary:
          "David's advice on fundraising, emphasizing the importance of market research and team",
        tags: ['fundraising', 'team', 'advice']
      },
      {
        timestamp: '00:29:19,140',
        summary:
          'Discussion on common startup challenges and how to overcome them',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '00:37:21,480',
        summary:
          'Analysis of strengths and weaknesses of Korean startups compared to US startups',
        tags: ['culture', 'growth', 'advice']
      },
      {
        timestamp: '00:48:29,640',
        summary:
          "Ryan's advice to young professionals and future entrepreneurs, focusing on market validation and sales strategy",
        tags: ['advice']
      },
      {
        timestamp: '00:55:31,319',
        summary:
          'Q&A session opens with a question about finding the right engineers',
        tags: ['team']
      },
      {
        timestamp: '00:57:33,839',
        summary:
          'Ryan discusses the importance of brand building and customer relationships for e-commerce',
        tags: ['growth', 'advice']
      },
      {
        timestamp: '01:01:58,079',
        summary: 'David shares his most exciting moments as a startup mentor',
        tags: ['advice', 'success']
      },
      {
        timestamp: '01:05:08,819',
        summary:
          'Discussion on the "slow burn" phase of startups and the importance of resilience',
        tags: ['resilience', 'advice']
      },
      {
        timestamp: '01:09:19,500',
        summary:
          'Grace discusses the challenges of managing a diverse team in a fast-growing Korean startup',
        tags: ['team', 'growth', 'culture', 'language']
      },
      {
        timestamp: '01:11:48,239',
        summary:
          'Discussion on the importance of constant communication and a shared vision within a company',
        tags: ['team', 'advice']
      },
      {
        timestamp: '01:12:47,400',
        summary: 'Question about when to prioritize accounting compliance',
        tags: ['advice']
      }
    ]
  }
]

// const chapters = []

// for (const video of data) {
//   for (const chapter of video.chapters) {
//     chapters.push({ ...chapter, videoId: video.videoId })
//     const jsonChapters = JSON.stringify(chapters)
//     fs.writeFileSync('chapters.json', jsonChapters)
//   }
// }

const videos = {}

for (const video of data) {
  videos[video.videoId] = {
    publisher: video.publisher,
    title: video.title,
    year: video.year,
    lang: video.lang
  }
  const jsonVideos = JSON.stringify(videos)
  fs.writeFileSync('videos.json', jsonVideos)
}
