import React from 'react'
import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import Banner from '../components/Banner'

function HomePage() {
    return (
        <div>
            <section>
                <h1 style={{ fontSize: '2.5rem' }}>Welcome! ☺</h1>
                <p>If you've found your way here, you're likely in the midst of considering a change in your
                career. This is your go-to community for all things related to exploring new career paths.</p>
                <p>“The realization of impermanence is paradoxically the only thing we can hold onto, perhaps our
                    only lasting possession. It is like the sky, or the earth. No matter how much everything around
                    us may change or collapse, they endure.”
                </p>
                <p>- Sogyal Rinpoche</p>
            </section>

            <section>
                <section id="people">
                    <Banner title="Get Inspired" />
                </section>
                <p>Your next adventure is waiting. Inspo from success career pivoters.</p>

                <CardContainer>
                    <Card
                        image="../images/chloe.png"
                        title="Chloe Shih"
                        description="Product Manager @Discord & Content Creator"
                        hasImage={true}
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Content', color: '#ffd6a5'},
                        ]}
                        popupDescription="Chloe Shih is a lifestyle and tech creator based Los Angeles.
                        She is currently a product lead at Discord and previously worked at TikTok,
                        Facebook/Meta, Google, and various startups. She started her content journey
                        this past year and creates videos on intimate career stories, life+work vlogs,
                        and adult life topics (home, finances, mental health)."
                        hasPopup={true}
                        twitter={"http://twitter.com/colorsofchloe"}
                        linkedin={"https://www.linkedin.com/in/chloe-shih/"}
                        instagram={"http://instagram.com/thechlobro"}
                        youtube={"http://youtube.com/colorsofchloe"}
                        tiktok={"http://tiktok.com/@colorsofchloe"}
                        website={"https://www.colorsofchloe.com/"}
                    />

                    <Card
                        image="../images/samantha.png"
                        title="Samantha Carow"
                        description="Co-Founder & CEO @Dwellwell"
                        hasImage={true}
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Real Estate', color: '#caffbf'}
                        ]}
                        popupDescription="Samantha Carow is the co-founder and CTO of DwellWell. She’s
                        spent the majority of her career in startups, from Preact (acquired by Spotify
                        in 2016) to Reddit, and is now using her engineering prowess and leadership
                        to bring home buying into the 21st century with DwellWell. Sam is passionate
                        about diversifying the tech ecosystem and strives to build an equitable,
                        empathetic, and results-driven engineering culture. She is a leader in the
                        women in tech space, and has spoken at the Grace Hopper Celebration and Women
                        in Tech Summit."
                        hasPopup={true}
                        twitter={"https://twitter.com/samcarow"}
                        linkedin={"https://www.linkedin.com/in/samanthacarow"}
                        instagram={"https://www.instagram.com/samcarow/"}
                        website={"https://www.dwellwell.com/"}
                    />

                    <Card
                        image="../images/rose.png"
                        title="Rose Han"
                        description="Solopreneur & Content Creator"
                        hasImage={true}
                        tags={[
                            {text: 'Finance', color: '#9bf6ff'},
                            {text: 'Content', color: '#ffd6a5'},
                        ]}
                        popupDescription="Rose Han is a YouTuber, Money Expert, Educator, Traveler, Rebel,
                        and #1 Book Nerd. Her mission is to empower you with the mindset and financial
                        know-how to get more of what you want out of life."
                        hasPopup={true}
                        instagram={"https://www.instagram.com/itsrosehan/"}
                        youtube={"https://www.youtube.com/@itsrosehan"}
                        website={"https://rosehan.com/"}
                    />

                    <Card
                        image="../images/meagan.png"
                        title="Meagan Loyst"
                        description="Co-Founder & CEO @Gen Z VCs"
                        hasImage={true}
                        tags={[
                            {text: 'VC', color: '#fefae0'},
                        ]}
                        popupDescription="Meagan is a thought leader at the intersection of Gen Z &
                        innovation. She coined the term 'Gen Z VC' in her 1st article and started the Gen Z
                        VCs Slack community (now 19k+ strong) in November 2020, which has grown into a much
                        larger movement centered around empowering the next generation of Gen Z innovators."
                        hasPopup={true}
                        twitter={"https://twitter.com/meaganloyst"}
                        linkedin={"https://www.linkedin.com/in/meaganloyst"}
                        website={"http://www.meaganloyst.com/"}
                    />

                    <Card
                        image="../images/julia.png"
                        title="Julia Kestner"
                        description="Illustrator @Julia Kestner Designs"
                        hasImage={true}
                        tags={[
                            {text: 'Art', color: '#bdb2ff'},
                        ]}
                        popupDescription="Julia (she/her/hers) is an illustrator with a passion for creating
                        purpose-driven art. She specializes in creating artwork with heart and purpose to promote
                        positive change, with collaborators and for communities who value the same things."
                        hasPopup={true}
                        instagram={"https://www.instagram.com/juliakestnerdesigns/"}
                        website={"https://www.juliakestnerdesigns.com/"}
                    />

                    <Card
                        image="../images/stacy.png"
                        title="Stacy London"
                        description="CEO @State of Menopause"
                        hasImage={true}
                        tags={[
                            {text: 'Media', color: '#e9edc9'},
                        ]}
                        popupDescription="Stacy London started out as a freelance fashion stylist and assistant
                        at Vogue before being hired to be the fashion editor at Mademoiselle magazine. After
                        getting fired, she styled for commercials and landed a role in hit series What Not
                        to Wear. After WNTW ended, she cofounded State of Menopause and is now focusing on
                        advocacy, education, and community."
                        hasPopup={true}
                        twitter={"https://twitter.com/stacylondon"}
                        linkedin={"https://www.linkedin.com/in/stacy-london-874700201"}
                    />

                    <Card
                        image="../images/eric.png"
                        title="Eric Yuan"
                        description="Founder & CEO @Zoom"
                        hasImage={true}
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                        ]}
                        popupDescription="Eric Yuan is the founder of Zoom, a video communications tool that
                        went public in April 2019; Zoom usage surged during the coronavirus pandemic. He was
                        previously a manager of WebEx at Cisco, which acquired the video conferencing company
                        in 2007. Born in China, Yuan move to Silicon Valley in 1997 after eight failed attempts
                        to obtain a visa. At the IPO, Yuan owned 22% of Zoom, which was valued at just over $9
                        billion before trading began. An avid basketball fan, Yuan attends his children's games
                        and counted Golden State Warriors player Andre Iguodala as an investor."
                        hasPopup={true}
                        twitter={"https://twitter.com/ericsyuan"}
                        linkedin={"https://www.linkedin.com/in/ericsyuan/"}
                    />

                    <Card
                        image="../images/david.png"
                        title="David Baszucki"
                        description="Co-Founder & CEO @Roblox"
                        hasImage={true}
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Games', color: '#fdffb6'},
                        ]}
                        popupDescription="David Baszucki co-founded Knowledge Revolution with his brother Greg, where he
                        created the successful physics simulator Interactive Physics. After the company was
                        sold for 19 million dollars, Baszucki worked as Vice President and General Manager at MSC
                        Software for three years before co-founding Roblox with Erik Cassel."
                        hasPopup={true}
                        twitter={"https://twitter.com/davidbaszucki/"}
                        linkedin={"https://www.linkedin.com/in/davidbaszucki/"}
                    />

                    <Card
                        image="../images/apolo.png"
                        title="Apolo Ohno"
                        description="Motivational Speaker & Venture Investor"
                        hasImage={true}
                        tags={[
                            {text: 'Sports', color: '#a0c4ff'},
                        ]}
                        popupDescription="Apolo Ohno is the most decorated U.S. Winter Olympian in history. After
                        retiring from sports, he transitioned into the world of business, including keynote speaking,
                        authoring several New York Times Best Selling books, jumping into rare earth mining, and more."
                        hasPopup={true}
                        twitter={"https://twitter.com/ApoloOhno"}
                        linkedin={"https://www.linkedin.com/in/apolo-ohno/"}
                        website={"https://apoloohno.com/"}

                    />

                    <Card
                        image="../images/stan.png"
                        title="Stan Lee"
                        description="Former President & Chairman @Marvel Comics"
                        hasImage={true}
                        tags={[
                            {text: 'Entertainment', color: '#ffe5d9'},
                        ]}
                        popupDescription="Stan Lee was an American comic-book writer, editor, and publisher, who was
                        executive vice president and publisher of Marvel Comics. Lee co-created Spider-Man, the Hulk,
                        Doctor Strange, the Fantastic Four, Iron Man, Daredevil, Thor, the X-Men, and many other
                        fictional characters, introducing a thoroughly shared universe into superhero comic books. In
                        addition, he challenged the comics' industry's censorship organization, the Comics Code Authority,
                        indirectly leading to it updating its policies. Lee subsequently led the expansion of Marvel Comics
                        from a small division of a publishing house to a large multimedia corporation."
                        hasPopup={true}
                        twitter={"https://twitter.com/TheRealStanLee"}
                        instagram={"https://www.instagram.com/therealstanlee/"}
                        website={"https://therealstanlee.com/"}
                    />

                    <Card
                        image="../images/daniella.png"
                        title="Daniella Pierson"
                        description="Co-Founder & CEO @The Newsette & Wondermind"
                        hasImage={true}
                        tags={[
                            {text: 'Media', color: '#e9edc9'},
                        ]}
                        popupDescription="Pierson founded The Newsette, a newsletter for women, as a college sophomore, which
                        now has over 500,000 subscribers and 4 million monthly views. Later, she joined Mandy Teefey and
                        Selena Gomez to launch WonderMind, a media company focusing on mental health and aiming to normalize
                        it and reduce stigma. WonderMind sets itself apart from wellness apps and therapy platforms, with a
                        goal of 'getting into the dirt of what could really help people,' says Teefey, who leads the
                        creative content of the company."
                        hasPopup={true}
                        twitter={"https://twitter.com/fromdaniella"}
                        linkedin={"https://www.linkedin.com/in/daniella-pierson"}
                    />

                    <Card
                        image="../images/erika.png"
                        title="Erika Kullberg"
                        description="CEO @Plug and Law & Content Creator"
                        hasImage={true}
                        tags={[
                            {text: 'Law', color: '#cdb4db'},
                            {text: 'Content', color: '#ffd6a5'},
                        ]}
                        popupDescription="Erika Kullberg is an attorney and personal finance expert featured in Inc. Magazine,
                        CNBC, U.S. News & World Report, Business Insider and more. After spending years as a corporate lawyer
                        representing Fortune 500 companies, she founded Plug and Law, an online legal company making legal
                        more accessible for online business owners and entrepreneurs. She discovered her passion for educating
                        others about personal finance after paying off over $225,000 in student loans in under 2 years and now
                        creates content on social media to empower others with financial knowledge. She is one of the largest
                        finance influencers and one of the most followed lawyers on social media, with over 19 million followers
                        across TikTok, Instagram, YouTube and Facebook."
                        hasPopup={true}
                        linkedin={"https://www.linkedin.com/in/erika2"}
                        instagram={"https://www.instagram.com/erikankullberg/"}
                        tiktok={"https://www.tiktok.com/@erikakullberg/"}
                        youtube={"https://www.youtube.com/@Erika2/"}
                        website={"https://erikakullberg.com/"}
                    />

                    <Card
                        image="../images/laura.png"
                        title="Laura Schubert"
                        description="Co-Founder & CEO @Fur"
                        hasImage={true}
                        tags={[
                            {text: 'Personal Care', color: '#bdb2ff'},
                        ]}
                        popupDescription="Schubert worked as a management consultant at Bain and Company, as well as L.E.K.
                        Consulting, before co-founding Fur in 2016. Fur is the first daily hair and skincare line for all body
                        hair and skin, promoting inclusivity in beauty standards. Fur aims to prevent ingrown hairs, regardless
                        of personal grooming preferences."
                        hasPopup={true}
                        linkedin={"https://www.linkedin.com/in/laura-schubert-b7355327/"}
                    />

                    <Card
                        image="../images/lilian.png"
                        title="Lillian Tung"
                        description="Co-Founder & CMO @Fur"
                        hasImage={true}
                        tags={[
                            {text: 'Personal Care', color: '#bdb2ff'},
                        ]}
                        popupDescription="Lillian Tung is a seasoned entrepreneur and marketer in the cosmetics industry, with
                        expertise in digital acquisition, brand development, and product marketing. She has held various marketing
                        positions at Time Inc and Maybelline, but was disillusioned by the crowded beauty space before co-founding Fur."
                        hasPopup={true}
                        linkedin={"https://www.linkedin.com/in/lillian-tung-3744989/"}
                    />

                    <Card
                        image="../images/melanie.png"
                        title="Melanie Fellay"
                        description="Co-Founder & CEO @Spekit"
                        hasImage={true}
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                        ]}
                        popupDescription="Melanie Fellay is the CEO and co-founder of Spekit, a cutting-edge platform that enables
                        employees to learn just in time, leading to increased productivity and faster onboarding. The creation of Spekit
                        was a response to the challenge Melanie and her co-founder Zari faced in driving tool adoption and employee
                        enablement with outdated solutions. Prior to founding Spekit, Melanie was a business operations and enablement
                        expert at RealtyShares."
                        hasPopup={true}
                        linkedin={"https://www.linkedin.com/in/melaniefellay/"}
                    />

                    <Card
                        image="../images/justin.png"
                        title="Justin Welsh"
                        description="Solopreneur"
                        hasImage={true}
                        tags={[
                            {text: 'Content', color: '#ffd6a5'},
                        ]}
                        popupDescription="Over the last decade, Justin has helped build two $50M+ ARR companies, teams of 150+ people,
                        and raise over $300M in venture capital. Then, in 2019, he burned out. Now he runs a boutique advisory firm for
                        entrepreneurs and create digital products for creators. When he's not advising and building products, he's an angel
                        investor, a mentor to entrepreneurs in LATAM with 500 Startups, and an LP at GTM Fund, a rolling fund investing $4
                        million per year into early-stage B2B SaaS companies."
                        hasPopup={true}
                        twitter={"https://twitter.com/thejustinwelsh"}
                        linkedin={"https://www.linkedin.com/in/justinwelsh/"}
                        instagram={"https://www.instagram.com/thejustinwelsh/"}
                        website={"https://www.justinwelsh.me/"}
                    />

                    <Card
                        image="../images/mayuko.png"
                        title="Mayuko Inoue"
                        description="Senior iOS SWE @Matter Neuroscience & Content Creator"
                        hasImage={true}
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Content', color: '#ffd6a5'},
                        ]}
                        popupDescription="Mayuko Inoue is a content creator and Software Engineer. After working in Silicon Valley tech companies
                        like Intuit, Patreon, and Netflix for six years as an iOS Engineer, she became a full-time creator in 2020. Her work aims
                        to help people find their way through the tech industry by sharing her own experiences navigating this world through
                        technology, career advice, and lifestyle videos. She is passionate about discussions around mental health, cultural
                        identity, and creating technology with empathy and compassion."
                        hasPopup={true}
                        twitter={"https://twitter.com/hellomayuko"}
                        instagram={"http://instagram.com/hellomayuko"}
                        youtube={"https://www.youtube.com/@hellomayuko/"}
                        website={"https://www.hellomayuko.com"}
                    />

                    <Card
                        image="../images/rowena.png"
                        title="Rowena Tsai"
                        description="Host & Co-Producer @Beauty Within & Content Creator"
                        hasImage={true}
                        tags={[
                            {text: 'Personal Care', color: '#bdb2ff'},
                        ]}
                        popupDescription="Rowena Tsai is a productivity and wellness YouTuber who focuses on encouraging her
                        peers to take an honest and sober look at their lives to see if they're living the life they proactively choose to
                        live. And if they're not, to find the courage to do something about it. She is also the host and co-producer of
                        Beauty Within and hosts a podcast Voice Hugs with her friend Vivian Van."
                        hasPopup={true}
                        linkedin={"https://www.linkedin.com/in/rowenatsai"}
                        instagram={"https://www.instagram.com/rowenatsai/"}
                        youtube={"https://www.youtube.com/user/rowenatsai"}
                    />

                    <Card
                        image="../images/eliot.png"
                        title="Eliot Marshall"
                        description="Co-Founder @Easton Training Center & Retired MMA Artist"
                        hasImage={true}
                        tags={[
                            {text: 'Sports', color: '#a0c4ff'},
                        ]}
                        popupDescription="Eliot Marshall is a prolific competitor as a professional mixed martial artist (MMA) and a Brazilian
                         Jiu-Jitsu black belt under Amal Easton. Coming through the Brazilian Jiu-Jitsu belt system, Eliot became the first
                         American to earn IBJJF Pan American titles as a blue, purple, and brown belt. While climbing the ranks of Brazilian
                         Jiu-Jitsu, Eliot entered the world of mixed martial arts in 2006, eventually competing in TUF and then signing with
                         the UFC. In 2011, after a few ups and downs with his MMA career, Marshall decided to hang up his gloves and open
                         training centers across the mile-high city of Denver, Colorado, formally named Easton Training Center along with his
                         coach Amal Easton. It wasn’t long before Marshall went on to further success as an entrepreneur, Podcast host, and
                         world-class speaker, trainer, and author."
                        hasPopup={true}
                        twitter={"https://twitter.com/FireMarshall205"}
                        instagram={"https://www.instagram.com/firemarshall205/"}
                        youtube={"https://www.youtube.com/user/firemarshall01"}
                        website={"https://eliotmarshall.com/"}
                    />

                    <Card
                        image="../images/codie.png"
                        title="Cody Sanchez"
                        description="CEO @Contrarian Thinking & Co-Founder @Unconventional Acquisitions"
                        hasImage={true}
                        tags={[
                            {text: 'Finance', color: '#9bf6ff'},
                            {text: 'Content', color: '#ffd6a5'},
                        ]}
                        popupDescription="Codie is the founder and CEO of Contrarian Thinking, with over 2.5+ million subscribers. She is
                        the co-founder of Unconventional Acquisitions, focused on small business acquisitions in the micro-PE space with an
                        emphasis on roll-ups. She runs a holding company of SMB’s below $10M EBITDA focused upon what she calls “boring
                        businesses,” or service-based businesses. She is a former partner at private equity firm EEC, and built First Trust’s
                        $1 billion+ AUM Latin America business. She held leadership positions at Goldman Sachs, State Street, and Vanguard.
                        She started as a journalist where she won the JFK award and Howard Buffett Foundation. She was listed as a 25 Most
                        Innovative Leader in Cannabis, and a Top Female Investor by Forbes. She has an M.B.A. from Georgetown University,
                        a master’s from ESADE and Fundação Getúlio Vargas, and a B.A. from Arizona State University. She sits on the board of
                        Permian Investment, and Magma Partners Chilean Venture Fund."
                        hasPopup={true}
                        twitter={"https://twitter.com/codie_sanchez"}
                        linkedin={"https://www.linkedin.com/in/codiesanchez"}
                        instagram={"http://instagram.com/codiesanchez"}
                        tiktok={"https://www.tiktok.com/@realcodiesanchez"}
                        youtube={"https://www.youtube.com/c/CodieSanchezCT"}
                        website={"https://www.codiesanchez.com/"}
                    />
                </CardContainer>
            </section>

            <section>
                <section id="learn">
                    <Banner title="Explore Around" />
                </section>
                <p>Mix things up. A curated selection of resources to take your career to the next level.</p>

                <CardContainer>
                    <Card
                        image="../images/codeacademy.png"
                        title="Code Academy"
                        description="The easiest way to learn to code"
                        link="https://www.codecademy.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Coding', color: '#ffadad'},
                        ]}
                    />

                    <Card
                        image="../images/appacademy.png"
                        title="App Academy"
                        description="Free coding bootcamp through A/A Open"
                        link="https://appacademy.io/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Coding', color: '#ffadad'},
                        ]}
                    />

                    <Card
                        image="../images/appbrewery.png"
                        title="The Complete 2023 Web Development Bootcamp"
                        description="Become a Full-Stack Web Developer with 1 course"
                        link="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Coding', color: '#ffadad'},
                        ]}
                    />

                    <Card
                        image="../images/coursera.png"
                        title="Coursera"
                        description="Access 2,700+ free online courses"
                        link="https://www.coursera.org/courses?query=free"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'University', color: '#ffd6a5'},
                            {text: 'General', color: '#a0c4ff'},
                        ]}
                    />

                    <Card
                        image="../images/zerotodiamond.png"
                        title="Zero to Diamond"
                        description="A social media platform & free coaching for real estate agents"
                        link="https://zerotodiamond.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Real Estate', color: '#caffbf'}
                        ]}
                    />

                    <Card
                        image="../images/pmexercises.png"
                        title="Product Management Exercises"
                        description="The ultimate resource to help you prep for PM interviews"
                        link="https://www.productmanagementexercises.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Product Management', color: '#fdffb6'}
                        ]}
                    />

                    <Card
                        image="../images/a16zcrypto.png"
                        title="a16z Crypto Startup School"
                        description="12-week accelerator program for Web3 startups"
                        link="https://a16zcrypto.com/crypto-startup-school/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Crypto', color: '#fefae0'}
                        ]}
                    />

                    <Card
                        image="../images/curiousaddys.png"
                        title="Curious Addys"
                        description="A place for the curious to learn about Web3"
                        link="https://curiousaddys.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Crypto', color: '#fefae0'}
                        ]}
                    />

                    <Card
                        image="../images/compound.png"
                        title="The Manual"
                        description="Curated library of wealth planning resources for tech"
                        link="https://manual.withcompound.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Finance', color: '#ffc6ff'},
                        ]}
                    />

                    <Card
                        image="../images/tedtalks.png"
                        title="TED Talks"
                        description="A nonprofit devoted to spreading ideas"
                        link="https://www.ted.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'General', color: '#a0c4ff'}
                        ]}
                    />

                    <Card
                        image="../images/linkedin.png"
                        title="LinkedIn Learning"
                        description="A learning experience built for skill builders"
                        link="https://learning.linkedin.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'General', color: '#a0c4ff'}
                        ]}
                    />

                    <Card
                        image="../images/duolingo.png"
                        title="Duolingo"
                        description="Free language education for the world"
                        link="https://www.duolingo.com/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'Language', color: '#bdb2ff'}
                        ]}
                    />

                    <Card
                        image="../images/stanford.png"
                        title="Stanford Online"
                        description="Learn from Stanford instructors & industry experts for free"
                        link="https://online.stanford.edu/free-courses"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'University', color: '#ffd6a5'}
                        ]}
                    />

                    <Card
                        image="../images/mit.png"
                        title="MIT Open Learning Library"
                        description="Home to selected free educational content from MIT"
                        link="https://ocw.mit.edu/course-lists/open-learning-library/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'University', color: '#ffd6a5'}
                        ]}
                    />

                    <Card
                        image="../images/edx.png"
                        title="edX"
                        description="Learning is what you make of it"
                        link="https://www.edx.org/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'University', color: '#ffd6a5'}
                        ]}
                    />

                    <Card
                        image="../images/yale.png"
                        title="Open Yale Courses "
                        description="Free & open access to a selection of intro Yale courses"
                        link="https://oyc.yale.edu/"
                        hasLink={true}
                        hasImage={true}
                        tags={[
                            {text: 'University', color: '#ffd6a5'}
                        ]}
                    />
                </CardContainer>

            </section>

            <section>
                <section id="jobs">
                    <Banner title="Find A New Role" />
                </section>
                <p>Make every day a dream. Find roles you never knew existed.</p>

                <CardContainer>
                    <Card
                        image="../images/web3jobs.png"
                        title="Web3 Jobs"
                        description="Browse 29K+ blockchain jobs in web3 at 2.9K+ projects"
                        tags={[
                            {text: 'Crypto', color: '#fefae0'}
                        ]}
                        link="https://web3.career/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/we3.png"
                        title="We3 Talent Match"
                        description="Top Web3 companies investing in diverse & exceptional talent"
                        tags={[
                            {text: 'Crypto', color: '#fefae0'}
                        ]}
                        link="https://companies.hello-we3.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/metaintro.png"
                        title="metaintro"
                        description="The professional resume wallet for web3"
                        tags={[
                            {text: 'Crypto', color: '#fefae0'}
                        ]}
                        link="https://www.metaintro.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/cryptojobslist.png"
                        title="CryptoJobsList"
                        description="The biggest list of crypto, web3, & blockchain jobs"
                        tags={[
                            {text: 'Crypto', color: '#fefae0'}
                        ]}
                        link="https://cryptojobslist.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/sidehustlestack.png"
                        title="Side Hustle Stack"
                        description="Ultimate database of earning opportunities"
                        tags={[
                            {text: 'Side Hustles', color: '#bdb2ff'}
                        ]}
                        link="https://sidehustlestack.co/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/hubstaff.png"
                        title="Hubstaff Talent"
                        description="Free way to find the world's best remote talent"
                        tags={[
                            {text: 'Side Hustles', color: '#bdb2ff'}
                        ]}
                        link="https://talent.hubstaff.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/builtin.png"
                        title="BuiltIn"
                        description="Online community for national startups & tech companies"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                        ]}
                        link="https://builtin.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/elpha.png"
                        title="Elpha"
                        description="Professional network dedicated to help women in tech succeed"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                        ]}
                        link="https://elpha.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/lennys.png"
                        title="Lenny’s Talent Collective"
                        description="Find product-building roles at world-class companies"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                        ]}
                        link="https://www.lennysjobs.com/jobs"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/weworkremotely.png"
                        title="We Work Remotely"
                        description="The largest remote work community in the world"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://weworkremotely.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/wellfound.png"
                        title="wellfound"
                        description="Jobs you can't find anywhere else"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://wellfound.com/jobs"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/jobgether.png"
                        title="Jobgether"
                        description="One click, 69,540 remote jobs"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://jobgether.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/pangian.png"
                        title="Pangian"
                        description="AI-powered global remote network"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://pangian.com/job-travel-remote/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/workew.png"
                        title="Workew"
                        description="The best jobs to work remotely"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://workew.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/findasync.png"
                        title="FindAsync"
                        description="Find your next async remote job"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.findasync.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/tjfg.png"
                        title="Tech Jobs For Good"
                        description="Job platform for mission-driven organizations"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                        ]}
                        link="https://techjobsforgood.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/stillhiring.png"
                        title="StillHiring"
                        description="A list of tech companies that are still actively hiring"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                        ]}
                        link="https://stillhiring.today/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/jobspresso.png"
                        title="Jobspresso"
                        description="Expertly curated remote jobs in tech, marketing, & more"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://jobspresso.co/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/crossover.png"
                        title="Crossover"
                        description="Accelerate your career with leading remote opportunities"
                        tags={[
                            {text: 'Tech', color: '#ffadad'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.crossover.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/lensa.png"
                        title="Lensa"
                        description="Discover job opportunities from leading companies"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                        ]}
                        link="https://lensa.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/talent.png"
                        title="Talent"
                        description="Search from over 40 million jobs"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                        ]}
                        link="https://www.talent.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/flexjobs.png"
                        title="FlexJobs"
                        description="The #1 job site to find remote jobs"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.flexjobs.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/remoteco.png"
                        title="Remote.co"
                        description="All things remote work"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://remote.co/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/dynamite.png"
                        title="Dynamite Jobs"
                        description="Find your next remote job today"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://dynamitejobs.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/growmotely.png"
                        title="Growmotely"
                        description="Discover remote companies that are a perfect match"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.growmotely.com/job-board/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/justremote.png"
                        title="FlexJobs"
                        description="Discover jobs from the greatest remote working companies"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://justremote.co/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/workingnomads.png"
                        title="Working Nomads"
                        description="Curated remote jobs for the modern working nomad"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.workingnomads.com/jobs"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/remotive.png"
                        title="Remotive"
                        description="An award-winning remote job board"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://remotive.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/flexa.png"
                        title="Flexa"
                        description="The global directory of verified flexible companies"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://flexa.careers/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/skipthedrive.png"
                        title="Skip The Drive"
                        description="Search for flexible, remote & hybrid jobs"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.skipthedrive.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/remotehub.png"
                        title="RemoteHub"
                        description="The best remote jobs & companies"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.remotehub.com/jobs"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/remotetribe.png"
                        title="Remote Tribe"
                        description="Work & live anywhere in the world"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://www.remotetribe.life/remotejobs/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/rwj.png"
                        title="Remote Work Junkie"
                        description="Your hub for all things remote work"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                            {text: 'Remote', color: '#ffd6a5'},
                        ]}
                        link="https://jobs.remoteworkjunkie.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/powertofly.png"
                        title="Power to Fly"
                        description="Dream jobs at companies that value you"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                        ]}
                        link="https://powertofly.com/jobs/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/themuse.png"
                        title="The Muse"
                        description="Find work  that's worth it"
                        tags={[
                            {text: 'General', color: '#caffbf'},
                        ]}
                        link="https://www.themuse.com/"
                        hasLink={true}
                        hasImage={true}
                    />

                    <Card
                        image="../images/climatebase.png"
                        title="Climatebase"
                        description="Mobilizing talent to accelerate climate solutions"
                        tags={[
                            {text: 'Climate', color: '#9bf6ff'},
                        ]}
                        link="https://climatebase.org/"
                        hasLink={true}
                        hasImage={true}
                    />
                </CardContainer>
            </section>

            <section>
                <section id="advice">
                    <Banner title="Tips to Stay Afloat" />
                </section>
                <p>Articles, stories, quotes, and videos.</p>

                <CardContainer>
                    <Card
                        description="Stuck In a Rut? How To Get Out of a Workplace Rut"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://rediscoveryofme.com/how-to-get-out-rut-at-work/"
                        hasLink={true}
                    />

                    <Card
                        description="How Successful Women Sustain Career Momentum"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://hbr.org/2023/01/how-successful-women-sustain-career-momentum"
                        hasLink={true}
                    />

                    <Card
                        description="45 Pieces of Career Advice That Will Get You to the Top"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://www.themuse.com/advice/45-pieces-of-career-advice-that-will-get-you-to-the-top"
                        hasLink={true}
                    />

                    <Card
                        description="Career Development Guide Template"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://docs.google.com/document/d/1D5X7NWOrfdg86AEzgCm80jQB1b43xv1fGp-T-dsv-1U/edit"
                        hasLink={true}
                    />

                    <Card
                        description="Tips for negotiating your salary"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://www.youtube.com/watch?v=u9BoG1n1948&ab_channel=mayuko"
                        hasLink={true}
                    />

                    <Card
                        description="An IDEO Recruiter’s 5 Tips for Writing a Better Cover Letter"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://www.ideo.com/blog/an-ideo-recruiters-5-tips-for-writing-a-better-cover-letter"
                        hasLink={true}
                    />

                    <Card
                        description="Everything I Learned to Negotiate Your Salary"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://www.youtube.com/watch?v=sJ5Shzq68Ac&ab_channel=ChloeShih"
                        hasLink={true}
                    />

                    <Card
                        description="Why women should always do what we think we are not good at"
                        tags={[
                            {text: 'Career Advancement', color: '#ffadad'},
                        ]}
                        link="https://medium.com/@maimai816/why-women-should-always-do-what-we-think-we-are-not-good-at-e228e306ae08"
                        hasLink={true}
                    />

                    <Card
                        description="Shields Down"
                        tags={[
                            {text: 'Career Pivot', color: '#ffd6a5'},
                        ]}
                        link="https://randsinrepose.com/archives/shields-down/"
                        hasLink={true}
                    />

                    <Card
                        description="Consider Downshifting Your Career Instead Of Quiet Quitting"
                        tags={[
                            {text: 'Career Pivot', color: '#ffd6a5'},
                        ]}
                        link="https://www.forbes.com/sites/jackkelly/2023/01/17/consider-downshifting-your-career-instead-of-quiet-quitting/?sh=60ca4b6414a7"
                        hasLink={true}
                    />

                    <Card
                        description="Five Strategies for Making a Career Pivot"
                        tags={[
                            {text: 'Career Pivot', color: '#ffd6a5'},
                        ]}
                        link="https://www.gsb.stanford.edu/insights/five-strategies-making-career-pivot"
                        hasLink={true}
                    />

                    <Card
                        description="How To Change Careers, According To 50 People Who Made A Pivot"
                        tags={[
                            {text: 'Career Pivot', color: '#ffd6a5'},
                        ]}
                        link="https://www.forbes.com/sites/josephliu/2019/04/02/successfully-change-careers/?sh=79dfcfbf525c"
                        hasLink={true}
                    />

                    <Card
                        description="Embrace Your Paths: Why Having Multiple Jobs is a Good Thing"
                        tags={[
                            {text: 'Career Pivot', color: '#ffd6a5'},
                        ]}
                        link="https://www.themuse.com/advice/embrace-your-paths-why-having-multiple-jobs-is-a-good-thing"
                        hasLink={true}
                    />

                    <Card
                        description="Why some of us don't have one true calling"
                        tags={[
                            {text: 'Career Pivot', color: '#ffd6a5'},
                        ]}
                        link="https://www.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling"
                        hasLink={true}
                    />

                    <Card
                        description="Gen Z does not dream of labor"
                        tags={[
                            {text: 'Future of Work', color: '#fdffb6'},
                        ]}
                        link="https://www.vox.com/the-highlight/22977663/gen-z-antiwork-capitalism"
                        hasLink={true}
                    />

                    <Card
                        description="Why People Really Quit Their Jobs"
                        tags={[
                            {text: 'Future of Work', color: '#fdffb6'},
                        ]}
                        link="https://hbr.org/2018/01/why-people-really-quit-their-jobs?tpcc=orgsocial_edit"
                        hasLink={true}
                    />

                    <Card
                        description="Why You Should Stop Trying to Be Happy at Work"
                        tags={[
                            {text: 'Future of Work', color: '#fdffb6'},
                        ]}
                        link="-https://hbr.org/2019/07/why-you-should-stop-trying-to-be-happy-at-work"
                        hasLink={true}
                    />

                    <Card
                        description="You are more than your job. These 3 questions can help you figure out who you are outside of work"
                        tags={[
                            {text: 'Future of Work', color: '#fdffb6'},
                        ]}
                        link="https://www.fastcompany.com/90881896/these-3-questions-can-help-you-figure-out-who-you-are-outside-of-work"
                        hasLink={true}
                    />

                    <Card
                        description="Ten Unmistakable Signs Of A Toxic Culture"
                        tags={[
                            {text: 'Work Culture', color: '#caffbf'},
                        ]}
                        link="https://www.forbes.com/sites/lizryan/2016/10/19/ten-unmistakable-signs-of-a-toxic-culture/?sh=16be47bf115f"
                        hasLink={true}
                    />

                    <Card
                        description="If you are a leader at a company that did layoffs - you need to check on the folks still with you"
                        tags={[
                            {text: 'Work Culture', color: '#caffbf'},
                        ]}
                        link="https://www.linkedin.com/posts/alexisjscott_business-layoffs-culture-activity-7021122532359507968-K19e?utm_source=share&utm_medium=member_desktop"
                        hasLink={true}
                    />

                    <Card
                        description="A User Guide to Working With You"
                        tags={[
                            {text: 'Work Culture', color: '#caffbf'},
                        ]}
                        link="https://lg.substack.com/p/the-looking-glass-a-user-guide-to?s=r"
                        hasLink={true}
                    />

                    <Card
                        description="How To Find The Right Mentor For You"
                        tags={[
                            {text: 'Work Culture', color: '#caffbf'},
                        ]}
                        link="https://www.forbes.com/sites/lizelting/2023/01/14/how-to-find-the-right-mentor-for-you/?sh=1f006a0133ee"
                        hasLink={true}
                    />

                    <Card
                        description="Are You a True Leader or Just a Boss?"
                        tags={[
                            {text: 'Work Culture', color: '#caffbf'},
                        ]}
                        link="https://www.businessnewsdaily.com/1404-characteristics-good-boss.html"
                        hasLink={true}
                    />

                    <Card
                        description="Work-Life Balance: What It Is and 5 Ways to Improve It"
                        tags={[
                            {text: 'Work-Life Balance', color: '#9bf6ff'},
                        ]}
                        link="https://www.coursera.org/articles/work-life-balance"
                        hasLink={true}
                    />

                    <Card
                        description="Work Life Balance is a Cycle Not an Achievement"
                        tags={[
                            {text: 'Work-Life Balance', color: '#9bf6ff'},
                        ]}
                        link="https://hbr.org/2021/01/work-life-balance-is-a-cycle-not-an-achievement"
                        hasLink={true}
                    />

                    <Card
                        description="Jacinda Ardern’s Resignation Is A Lesson For Anyone Who Has Burnout At Work"
                        tags={[
                            {text: 'Work-Life Balance', color: '#9bf6ff'},
                        ]}
                        link="https://www.huffpost.com/entry/jacinda-ardern-burnout-work_l_63c98c61e4b07c0c7dfada1d"
                        hasLink={true}
                    />

                    <Card
                        description="When Living For The Weekend Becomes A Sign of Job Burnout"
                        tags={[
                            {text: 'Work-Life Balance', color: '#9bf6ff'},
                        ]}
                        link="https://www.huffpost.com/entry/burnout-weekend-job-solutions_l_5d8b96cbe4b0c6d0cef53b26"
                        hasLink={true}
                    />

                    <Card
                        description="12 People Share Why They Quit Their Jobs"
                        tags={[
                            {text: 'Work-Life Balance', color: '#9bf6ff'},
                        ]}
                        link="https://www.huffpost.com/entry/why-people-quit-jobs_l_5cc71110e4b08e4e348584f0"
                        hasLink={true}
                    />
                </CardContainer>
            </section>
        </div>
    )
}

export default HomePage