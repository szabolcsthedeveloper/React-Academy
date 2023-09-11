<script>
    import JobAppSection from "../../components/JobAppSection.svelte";
    import CheckListItem from "../../components/CheckListItem.svelte";

    const navItems = [
        "LEARNING",
        "GITHUB",
        "LINKEDIN",
        "PORTFOLIO",
        "PROJECTS",
        "RESUME",
        "APPLYING",
        "NETWORKING",
        "SKILLS",
        "LAST STEP",
        // 'FAQ'
    ];

    const frontendChecklist = [
        "HTML & CSS",
        "JavaScript or Python (or both!)",
        "Figma",
        "JavaScript Framework",
        "Storybook",
        "TailwindCSS",
        "Vite",
        "Consuming APIs",
        "Cloud Hosting",
    ];
    let frontendCheckListComplete = [];

    const backendChecklist = [
        "Webserver Framework (Node.js | Django | Flask)",
        "Authentication Systems (OAuth | JWT | API_KEYS)",
        "NoSQL Databases",
        "SQL Databases",
        "Paas Services",
        "CRON & Job Scheduling",
        "Cloud Hosting",
    ];
    let backendCheckListComplete = [];

    function handleChecklistUpdate(item, list) {
        if (list === "frontend") {
            if (frontendCheckListComplete.includes(item)) {
                frontendCheckListComplete = frontendCheckListComplete.filter(
                    (e) => e !== item
                );
            } else {
                frontendCheckListComplete = [
                    ...frontendCheckListComplete,
                    item,
                ];
            }
        } else {
            if (backendCheckListComplete.includes(item)) {
                backendCheckListComplete = backendCheckListComplete.filter(
                    (e) => e !== item
                );
            } else {
                backendCheckListComplete = [...backendCheckListComplete, item];
            }
        }
    }
</script>

<main
    class="flex-1 p-4 max-w-[800px] mx-auto w-full flex flex-col gap-8 sm:gap-10 md:gap-14 min-h-[400px] sm:min-h-[500px] jobApplications"
>
    <!-- <p class="text-center">On this page:</p> -->
    <section class="flex flex-col gap-4">
        <div
            id="topOfPage"
            class="py-4 sm:p-6 md:py-10 flex items-center justify-center flex-col gap-4"
        >
            <h2
                class="text-center font-semibold text-2xl sm:text-3xl md:text-4xl"
            >
                Land Your <span class="text-blue-700">Developer</span> Role!
            </h2>
            <p class="text-center">
                You're now ready to find a job - follow the steps below to knock
                the socks off your prospective employers and land a dev job
                today!
            </p>
        </div>
        <div class="grid grid-cols-2 gap-2 sm:gap-3">
            {#each navItems as navItem, i}
                <a
                    href={"#" + navItem}
                    class="flex text-sm items-center justify-between gap-8 border border-solid border-blue-900 hover:border-blue-500 px-4 py-2 rounded duration-200"
                >
                    <!-- <i class="fa-solid pl-4 fa-minus" /> -->
                    <p>
                        {navItem}
                    </p>
                    {#if navItem === "LEARNING"}
                        <i class="fa-regular fa-pen-to-square" />
                    {:else if navItem === "GITHUB"}
                        <i class="fa-brands fa-github" />
                    {:else if navItem === "LINKEDIN"}
                        <i class="fa-brands fa-linkedin-in" />
                    {:else if navItem === "PORTFOLIO"}
                        <i class="fa-regular fa-user" />
                    {:else if navItem === "PROJECTS"}
                        <i class="fa-solid fa-diagram-project" />
                    {:else if navItem === "JOB HUNT"}
                        <i class="fa-solid fa-list-check" />
                    {:else if navItem === "APPLYING"}
                        <i class="fa-regular fa-note-sticky" />
                    {:else if navItem === "NETWORKING"}
                        <i class="fa-solid fa-network-wired" />
                    {:else if navItem === "SKILLS"}
                        <i class="fa-solid fa-scale-balanced" />
                    {:else if navItem === "FAQ"}
                        <i class="fa-regular fa-circle-question" />
                    {:else if navItem === "RESUME"}
                        <i class="fa-regular fa-file-lines" />
                    {:else if navItem === "LAST STEP"}
                        <i class="fa-solid fa-trophy" />
                    {/if}
                </a>
            {/each}
        </div>
    </section>

    <JobAppSection sectionName={"LEARNING"}>
        <p class="">
            The first section pertains to the minimum contents that you will
            ideally have covered before prospective employers will take you
            seriously as a candidate.
        </p>
        <p class="">
            Following is two separate checklists; one for <b>Frontend</b>
            roles and another for
            <b>Backend</b>
            roles. If you're looking at a <b>Fullstack</b> role, then ideally you
            will have checked off more than 90% of the requirements from each.
        </p>
        <div class="flex flex-col gap-3 px-4 select-none">
            <div class="flex items-center justify-between">
                <h2>Frontend Checklist</h2>
                <p
                    class={"" +
                        (frontendCheckListComplete.length ===
                        frontendChecklist.length
                            ? " text-green-400"
                            : " text-sky-400")}
                >
                    {frontendCheckListComplete.length ===
                    frontendChecklist.length
                        ? "Complete"
                        : `${(
                              (frontendCheckListComplete.length * 100) /
                              frontendChecklist.length
                          ).toFixed()}%`}
                </p>
            </div>
            {#each frontendChecklist as item, i}
                <CheckListItem
                    type={"frontend"}
                    checklist={frontendCheckListComplete}
                    {handleChecklistUpdate}
                    {item}
                />
            {/each}
        </div>
        <div class="flex flex-col gap-3 px-4">
            <div class="flex items-center justify-between">
                <h2 class="">Backend Checklist</h2>
                <p
                    class={"" +
                        (backendCheckListComplete.length ===
                        backendChecklist.length
                            ? " text-green-400"
                            : " text-sky-400")}
                >
                    {backendCheckListComplete.length === backendChecklist.length
                        ? "Complete"
                        : `${(
                              (backendCheckListComplete.length * 100) /
                              backendChecklist.length
                          ).toFixed()}%`}
                </p>
            </div>
            {#each backendChecklist as item, i}
                <CheckListItem
                    type={"backend"}
                    checklist={backendCheckListComplete}
                    {handleChecklistUpdate}
                    {item}
                />
            {/each}
        </div>
        <!-- <CheckListItem /> -->
    </JobAppSection>

    <JobAppSection sectionName={"GITHUB"}>
        <p>
            GitHub is perhaps going to be your most important online network
            presence. It's a great place to portray your skillset and employers
            will definitely be looking here first.
        </p>
        <p>The recipe for success on your Github page is 4 part:</p>
        <ul class="flex flex-col gap-2 list-disc list-inside">
            <li>
                Regular contributions — From the minute you start working on
                your projects, you ideally need to be making a minimum of 1
                commit per day. It doesn't really matter if it's just adding a
                commented line, make the commit. Check out the Github GUI if
                you’re afraid of Git in the terminal.
            </li>
            <li>
                Three Pinned Project — These should be your primary projects,
                ideally on display in your portfolio too. It's great if these
                projects demonstrate different skillsets and combined, cover a
                wide array of tech. I like the following combo; a frontend
                framework + API project, an e-commerce project, and a full stack
                project with auth and a database.
            </li>
            <li>
                Readme.md files — These need to be pretty immaculate. A text
                explanation / the purpose and intention behind the project,
                problems you encountered, how you fixed them, and everything
                in-between. Each should also contain an abstract at the
                beginning that summarises the project and the technology! The
                format should be: Abstract, Introduction to the problem, why you
                want to fix it, how you’re going to fix it *tech used*, any
                issues you encountered along the way, overall reflection, link
                to live project.
            </li>
            <li>
                A friendly and professional picture and bio stating the same as
                your portfolio does above; your personality, pursuits &
                endeavours, and a link to your portfolio webpage and LinkedIn.
            </li>
        </ul>
    </JobAppSection>
    <JobAppSection sectionName={"LINKEDIN"}>
        <p>
            As above, a friendly yet professional image is paramount, and same
            goes for your bio (links to Github page and web portfolio also).
        </p>
        <ul class="flex flex-col gap-2 list-disc list-inside">
            <li>
                Your title should state “Full Stack Developer”, or whatever it
                is that you’re aiming to become.
            </li>
            <li>
                You cover photo should be something visually aesthetic, that is
                also special to you. Think of it as a wall-paper for your page.
            </li>
            <li>
                You need to fill out your prior work experience and provide some
                detail on how any of the roles you have helped historically have
                developed your communication, team working, self-management and
                problem solving skills.
            </li>
            <li>You need to complete the education section as above.</li>
            <li>
                You need to add your list of tech skills to the skills section —
                if you can, try complete the quizzes they have to gain a badge
                for that skill.
            </li>
            <li>
                You need to add any certificates you have to the license and
                certifications section — for example I completed the
                FreeCodeCamp.org JavaScript Algorithms and Data Structures
                certificate.
            </li>
            <li>Links to your main active projects and portfolio.</li>
        </ul>
    </JobAppSection>
    <JobAppSection sectionName={"PORTFOLIO"}>
        <p>
            Your portfolio is a great place to really bring all your assets
            together. You can really personalize it to express yourself and put
            your best foot forward. Ideally a portfolio has a nice and simple
            intro page and clear links to your subpages/sub-sections, and also
            your other socials (LinkedIn & GitHub).
        </p>
        <p>
            There are two essential sub-sections; one is a <b>portfolio</b>
            page that displays all your of your projects (3 is the perfect number).
            You'll want to have links to the GitHub code and the live demo for each
            of them. The second is an <b>experience</b> page that breaks down all
            of your prior work experience and how it contributes to your hardcore
            developer skills.
        </p>
        <p>
            Best if you can acquire a SSL protected domain for your portfolio :)
        </p>
    </JobAppSection>
    <JobAppSection sectionName={"PROJECTS"}>
        <p>
            Your choice of projects partially depends on what type of role
            you're looking for: Frontend, Backend or Full Stack.
        </p>
        <p>
            Select <b>3</b> from the below choices depending on what your end
            goal is; selecting a project will take you to a
            <b>YouTube</b> tutorial that will get you started:
        </p>
        <h2 class="pt-2">Full Stack Project Recommendations</h2>
        <ul class="flex flex-col gap-2">
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/rbMvm-CrkOA" target="_blank"
                    >An E-Commerce Store in Next.js + Stripe + TailwindCSS</a
                >
            </li>
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/oYQ61tmphYc" target="_blank"
                    >A Full SEN Stack Project (Svelte, Express, Node.js)</a
                >
            </li>
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/qLUTHVf2mF4" target="_blank"
                    >A Node.js + HTML + CSS + Firebase Full Stack Poll App</a
                >
            </li>
        </ul>
        <h2 class="pt-2">Frontend Project Recommendations</h2>
        <ul class="flex flex-col gap-2">
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/tYcjZomsFkY" target="_blank"
                    >A Data Visualisation Website (that consumes a data API and
                    presents metrics that the user can interact with, for
                    example a Covid Stats Website).</a
                >
            </li>
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/hRlujM-sycg" target="_blank"
                    >A React app that consumes an API, displays data, and has a
                    responsive design.</a
                >
            </li>
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/Gh4SeWGEHKg" target="_blank"
                    >Build a React web portfolio that is designed by AI</a
                >
            </li>
        </ul>
        <h2 class="pt-2">Backend Project Recommendations</h2>
        <ul class="flex flex-col gap-2">
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/37LJxWzjy6g" target="_blank"
                    >A Web Scraper Server (that stores data provides it as an
                    API)</a
                >
            </li>
            <!-- <li class="flex items-center gap-4">
					<i class="fa-solid fa-bolt" />
					<a href="#">An Evil Review Bot (That creates randomized reviews)</a>
				</li> -->
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/TJ_celb19Ko" target="_blank"
                    >A CRON Job Server (Completes a task at a given interval)</a
                >
            </li>
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-bolt" />
                <a href="https://youtu.be/FZHyHQ6ytZM" target="_blank"
                    >Something Serverless -_-</a
                >
            </li>
        </ul>
    </JobAppSection>
    <JobAppSection sectionName={"RESUME"}>
        <p>All you need to know for your <b>Resume</b> is right here:</p>
        <a
            href="https://www.reddit.com/r/jobs/comments/7y8k6p/im_an_exrecruiter_for_some_of_the_top_companies/"
            target="_blank"
            class="flex items-center gap-4"
        >
            <i class="fa-solid fa-link" />
            <p class="break-all underline">
                https://www.reddit.com/r/jobs/comments/7y8k6p/im_an_exrecruiter_for_some_of_the_top_companies/
            </p>
            <i class="fa-solid fa-link" />
        </a>
        <p>And for your <b>Cover Letter</b>:</p>
        <a
            href="https://www.reddit.com/r/jobs/comments/37rgr1/heres_the_best_cover_letter_ive_ever_seen/"
            target="_blank"
            class="flex items-center gap-4"
        >
            <i class="fa-solid fa-link" />
            <p class="break-all underline">
                https://www.reddit.com/r/jobs/comments/37rgr1/heres_the_best_cover_letter_ive_ever_seen/
            </p>
            <i class="fa-solid fa-link" />
        </a>
        <p />
    </JobAppSection>
    <JobAppSection sectionName={"APPLYING"}>
        <p>
            Now it's time to apply for some jobs; but where should you look? I
            found that there are four types of platforms worthy of your time and
            energy:
        </p>
        <ol class="flex flex-col gap-2 list-decimal list-inside">
            <li>
                The first place is LinkedIn; LinkedIn gets a high volume of
                applicants but it also has an absolutely goliath quantity of
                postings - definitely worth 1 or 2 applications per day (or as
                many as you can while ensuring the quality of each application
                is still high).
            </li>
            <li>
                The second place is the generic job post/board local to your
                area; in New Zealand it is <i>http://www.seek.co.nz</i>, and in
                Canada it is <i>https://ca.indeed.com</i>. Some of these may
                work in your area (like Indeed).
            </li>
            <li>
                The third is smaller, more niche job boards such as
                Angellist/Wellfound;<i>https://angel.co/</i>. If you can find
                these niche boards you can get quite a good response rate.
            </li>
            <li>
                And finally we have intermediary recruiter sites such as
                Hatchways.
            </li>
        </ol>
        <p>
            Some other examples are <b>StackOverflow</b> & <b>Indiehackers</b>.
        </p>
        <p>
            It's worth having a look at all of them and between the lot, you
            should be hearing back from prospective employers in no time.
        </p>
    </JobAppSection>
    <JobAppSection sectionName={"NETWORKING"}>
        <h2>This section will be your magical best friend!</h2>
        <p>
            Networking is a phenomal way to increase your odds in the job
            market. There are a number of different ways that professional
            networking can be leveraged during your job hunt. My favorite ways
            are as follows:
        </p>
        <ul class="flex flex-col gap-2">
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-code" />
                <div class="flex flex-col gap-1">
                    <p>
                        The first way is to find people who work for companies
                        you like, in roles that you desire; this might be done
                        on LinkedIn. I had a fair amount of success sending
                        connection requests to people with a small note attached
                        that said something like -
                    </p>
                    <p>
                        <i
                            >Hi [name], <br />I hope this message finds you
                            well. <br />I am reaching out as your professional
                            experience really caught my eye. I was wondering if
                            you might be open to having a short informational
                            interview with me? I would love to hear more about
                            your story. <br />Cheers, [your_name]
                        </i>
                    </p>
                    <p>
                        These informational interviews are amazing as they can
                        help you understand what skills are needed for the jobs
                        you want, perhaps they can offer some feedback on your
                        projects, and help you build connections with important
                        people (if they like you, they might offer you a
                        referral); it's basically a free interview.
                    </p>
                </div>
            </li>
            <li class="flex items-center gap-4">
                <i class="fa-solid fa-code" />
                <div class="flex flex-col gap-1">
                    <p>
                        The second piece is equally critical and should be part
                        of your <b>Job Application</b>
                        process. The strategy is; for every job application you submit,
                        you want to find either the job poster, or someone working
                        for that company in a related role (the more senior the better,
                        and I often find LinkedIn good for this search), and send
                        them the following message -
                    </p>
                    <p>
                        <i
                            >Hi [name], <br />I hope this message finds you
                            well. <br />I just noticed your job posting for a
                            [insert_job_posting_title] and as a seasoned
                            [insert_your_relevant_role_experience], I feel I
                            would be a great fit for the role.<br />
                            I'd love to connect and chat about the opportunity.
                            <br />Cheers, [your_name]
                        </i>
                    </p>
                    <p>
                        Once again, if they respond, it's basically a free
                        interview; a lot of the application process is just
                        getting the hiring team to meet you and see more than
                        just a resume on a screen.
                    </p>
                </div>
            </li>
        </ul>
        <p>These two steps can be paramount in helping you land a dev role.</p>
    </JobAppSection>
    <JobAppSection sectionName={"SKILLS"}>
        <p>
            In this section I just wanted to speak to one skill in particular -
        </p>
        <h2>COMMUNICATION</h2>
        <p>
            In a world where hundreds of other applicants can probably code just
            as well as you, have a portfolio of projects, perhaps even more
            university experience, <b>communication</b> is your single biggest weapon.
            As far as coding ability goes, employers just want to know that you can
            code. The person who gets the job however, is often the one who they
            want to work with the most.
        </p>
        <p>
            It’s absolutely critical that you’re polite in success, <i
                >AND IN REJECTION</i
            >. You cannot hand out enough “Thank you for this opportunity” and
            “I hope you’re having a nice week”. Friendly sentences, even a
            smiley face emoji makes a significant difference in displaying your
            personal affect. If you’re friendly, warm, and maybe a bit of fun,
            that’s how you’ll land your job. The other critical piece here is
            that you have to be able to receive feedback. It doesn’t matter how
            critical or how incorrect/unjustified you might feel it is; be
            appreciative. Say thank you. Be open minded to their words,
            acknowledge them, take them on board.
        </p>
        <p>
            You’re an inexperienced developer and you’re going to be receiving a
            lot of feedback so it’s vital that you’re humble and you take it
            like a champ! I cannot emphasize enough, every email and message
            should have some form of positivity. I like the template:
        </p>
        <p>
            <i
                >Hi [name],<br /> I hope you're having a great start to the week
                :)<br /> I wanted to say thank you for your time today. I
                greatly appreciate the opportunity to get to ......
                <br />Cheers, [your_name]</i
            >
        </p>
    </JobAppSection>
    <JobAppSection sectionName={"LAST STEP"}>
        <h2>Be patient. Be persistent. Grow.</h2>
        <p>
            If you experience a rejection, take your worst project, and replace
            it with a new project that’s better than the rest. And when you land
            your job, you’ll know so much that you’ll hit the ground running and
            you’ll never look back.
        </p>
    </JobAppSection>
    <a href="/" class="my-10 flex items-center gap-2 mx-auto">
        <h4>BACK <span class="text-blue-700">HOME</span></h4>
        <i class="fa-solid fa-house" />
    </a>
</main>
