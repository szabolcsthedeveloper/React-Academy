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
    "INTERVIEW",
    "NETWORKING",
    "SKILLS",
    "FINAL STEP",
  ];

  const frontendChecklist = [
    "HTML & CSS",
    "JavaScript or Python (or both!)",
    "TypeScript",
    "Figma, Canva or AdobeXD",
    "JavaScript Framework (React & Next.js)",
    "TailwindCSS",
    "Storybook",
    "Vite",
    "Consuming APIs (Postman | Supabase)",
    "Cloud Hosting (AWS | Netlify)",
  ];
  let frontendCheckListComplete = [];

  const backendChecklist = [
    "Webserver Framework (Node.js | Django)",
    "Authentication Systems (OAuth | JWT | API_KEYS)",
    "NoSQL Databases (MongoDB)",
    "SQL Databases (PostgreSQL)",
    "Paas Services",
    "CRON & Job Scheduling",
    "Cloud Hosting (AWS!)",
  ];
  let backendCheckListComplete = [];

  function handleChecklistUpdate(item, list) {
    if (list === "frontend") {
      if (frontendCheckListComplete.includes(item)) {
        frontendCheckListComplete = frontendCheckListComplete.filter(
          (e) => e !== item,
        );
      } else {
        frontendCheckListComplete = [...frontendCheckListComplete, item];
      }
    } else {
      if (backendCheckListComplete.includes(item)) {
        backendCheckListComplete = backendCheckListComplete.filter(
          (e) => e !== item,
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
  <section class="flex flex-col gap-4">
    <div
      id="topOfPage"
      class="py-4 sm:p-6 md:py-10 flex items-center justify-center flex-col gap-4"
    >
      <h2 class="text-center font-semibold text-2xl sm:text-3xl md:text-4xl">
        WHAT ARE YOU <span class="text-blue-700"> WAITING</span> FOR?
      </h2>
      <h2>
        <i class="fa fa-quote-left" aria-hidden="true"></i>
        <i class="text-left">
          No one… and I mean no one starts off with any skills. We are all very
          bad at everything we eventually become great at. If you are waiting
          for someone else to do it for you, it will never happen.
        </i>
        <i class="fa fa-quote-right" aria-hidden="true"></i>
      </h2>
    </div>
    <div class="grid grid-cols-2 gap-2 sm:gap-3 mb-20">
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
            <i class="fa fa-book" />
          {:else if navItem === "GITHUB"}
            <i class="fa-brands fa-github" />
          {:else if navItem === "LINKEDIN"}
            <i class="fa-brands fa-linkedin-in" />
          {:else if navItem === "PORTFOLIO"}
            <i class="fa-regular fa-user" />
          {:else if navItem === "PROJECTS"}
            <i class="fa-solid fa-database" />
          {:else if navItem === "JOB HUNT"}
            <i class="fa-solid fa-list-check" />
          {:else if navItem === "INTERVIEW"}
            <i class="fa-regular fa-pen-to-square" />
          {:else if navItem === "NETWORKING"}
            <i class="fa-solid fa-users" />
          {:else if navItem === "SKILLS"}
            <i class="fa-solid fa-bar-chart" />
          {:else if navItem === "RESUME"}
            <i class="fa-regular fa-file-lines" />
          {:else if navItem === "FINAL STEP"}
            <i class="fa-solid fa-award" />
          {/if}
        </a>
      {/each}
    </div>
  </section>

  <JobAppSection sectionName={"LEARNING"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i
        >Today isn't about today, it won't affect today, but the way you live
        today will change everything 5-10 years from now.</i
      >
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <p class="">
      Embark with the essentials! The first section outlines the non-negotiable
      skills that employers seek. Without these, you will be overlooked.
    </p>
    <p class="">
      Navigate the dual paths of <b>Frontend</b>
      and
      <b>Backend</b>
      Aspiring for <b>Fullstack</b> role? Ensure you're armed with over 90% of the
      expertise from both realms.
    </p>
    <p class="mb-10">
      Master the courses I've listed, and you'll be <b>fully equipped</b> with
      the expertise to thrive as a <b>Frontend</b>, <b>Backend</b>, or
      <b>Fullstack developer</b> and kickstart your remote journey.
    </p>
    <div class="flex flex-col gap-3 px-4 select-none mb-10">
      <div class="flex items-center justify-between">
        <h2><b class="text-blue-600">FRONTEND</b></h2>
        <p
          class={"" +
            (frontendCheckListComplete.length === frontendChecklist.length
              ? " text-green-400"
              : " text-sky-600")}
        >
          {frontendCheckListComplete.length === frontendChecklist.length
            ? "COMPLETED 🔥"
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
    <div class="flex flex-col gap-3 px-4 mb-20">
      <div class="flex items-center justify-between">
        <h2><b class="text-blue-600">BACKEND</b></h2>
        <p
          class={"" +
            (backendCheckListComplete.length === backendChecklist.length
              ? " text-green-400"
              : " text-sky-600")}
        >
          {backendCheckListComplete.length === backendChecklist.length
            ? "COMPLETED 🔥"
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
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i
        >Actions are controlled by beliefs. The belief that you are great will
        result in great actions. The belief that you are average will result in
        average actions.</i
      >
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <p>
      GitHub is your digital storefront in the tech world. It's the first
      impression for potential employers gauging your skills.
    </p>
    <p>To shine on GitHub, follow this blueprint:</p>
    <ul class="flex flex-col gap-2 list-disc list-inside mb-20">
      <li>
        <b class="pt-4 pb-1 text-blue-600">Consistent Contributions</b>: From
        day one, aim for at least one daily commit. Whether it's a major update
        or a mere comment, consistency is key. If the terminal intimidates you,
        the GitHub GUI is your ally.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Three/Four Pinned Projects</b>:
        Showcase your versatility with three primary projects. Ideally, these
        represent diverse abilities: a frontend project with an API, an
        e-commerce venture, and a full-stack endeavor with authentication and a
        database.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Detailed Readme.md</b>: These should
        be your project's storybook. Start with an abstract, delve into the
        problem, your solutions, the technologies used, challenges faced, and a
        reflection. Conclude with a link to the live project.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Personable Profile</b>: Grace your
        GitHub with a professional photo. Align your bio with your portfolio -
        highlight your quirks, ambitions, and include links to your portfolio
        and LinkedIn.
      </li>
    </ul>
  </JobAppSection>
  <JobAppSection sectionName={"LINKEDIN"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i
        >How easily we will cave into something we don't want to do as long as
        it provides us with a comfort zone.</i
      >
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <p>Your LinkedIn is your professional handshake in the digital realm.</p>
    <ul class="flex flex-col gap-2 list-disc list-inside mb-20">
      <li>
        <b class="pt-4 pb-1 text-blue-600">Profile Persona</b>: Go with a
        polished, welcoming photo. Ensure your bio echoes your GitHub's and
        includes crucial links.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Title Matters</b>: Wear your ambition
        proudly. If you're eyeing a “Full Stack Developer” role, let it be
        known.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Cover Photo</b>: A lot of people
        overlook this, think of it as your digital desk's wallpaper—something
        that resonates and is pleasing to the eye.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Experience Insights:</b> List past roles
        and spotlight how they honed your soft skills like communication and problem-solving.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Education</b>: A mirror reflection of
        your education section.(academic, bootcamp, personal projects, courses
        etc.)
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Tech Skills Display</b>: Showcase
        your arsenal of tech skills. Take LinkedIn's quizzes to earn and flaunt
        badges.
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Certificates</b>: Exhibit
        achievements from the course roadmap. (CS50, AWS, Meta, Udemy certs)
      </li>
      <li>
        <b class="pt-4 pb-1 text-blue-600">Project Links</b>: Direct visitors to
        your standout projects and portfolio."
      </li>
    </ul>
  </JobAppSection>
  <JobAppSection sectionName={"PORTFOLIO"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i
        >Be cautious of people who spend all their time putting forth a message
        of how great they are versus working on building something great.</i
      >
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <div class="mb-20">
      <p class="pb-4">
        Your portfolio is not just a window into your capabilities; it's a
        testament to your journey in the tech realm. It should speak volumes
        about your personality, while also offering a seamless journey for
        visitors through engaging intros, distinct sections, and easy links to
        your digital footprints like LinkedIn & GitHub.
      </p>
      <h2><b class="pt-4 pb-1 text-blue-600">PURPOSE</b></h2>
      <p class="mb-4">
        Your portfolio is more than a gallery; it's your proof. It demonstrates
        that not only can you talk about tech, but you also have the hands-on
        experience to back it up.
      </p>
      <h2>
        <b class="pt-4 pb-1 text-blue-600">MISCONCEPTIONS</b>
      </h2>
      <p class="mb-2">
        Remember, your portfolio isn't just another website. It's a curated
        space that prioritizes quality over quantity. A few stellar projects can
        say more than a dozen average ones.
      </p>
      <ul class="flex flex-col gap-2 list-disc list-inside pt-4">
        <li>
          <b class="pt-4 pb-1 text-blue-600">Functionalities</b>: The ability to
          list items, showcase individual items, and even switch themes.
        </li>
        <li>
          <b class="pt-4 pb-1 text-blue-600">Visual Appeal</b>: Use charts and
          data visualization to represent complex data in a digestible manner.
        </li>
        <li>
          <b class="pt-4 pb-1 text-blue-600">Visual Appeal</b>: Consider
          incorporating URL state management, but remember, it's optional.
        </li>
        <li>
          <b class="pt-4 pb-1 text-blue-600">Data Handling</b>: Implement local
          storage or even a database for robust data management.
        </li>
        <li>
          <b class="pt-4 pb-1 text-blue-600">User Access</b>: Provide a
          straightforward method for users to download your CV.
        </li>
        <li>
          <b class="pt-4 pb-1 text-blue-600">Skill and Project Spotlight</b>:
          our portfolio is a stage. Let your skills and projects take the
          limelight, allowing visitors to see the breadth and depth of your
          expertise.
        </li>
      </ul>
    </div>
  </JobAppSection>
  <JobAppSection sectionName={"PROJECTS"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i>Build cool things, nobody gives a shit about another weather app.</i>
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <p>
      Choosing projects aligns closely with your career direction: Frontend,
      Backend, or Full Stack. Here's a curated list to guide your journey. By
      selecting a project, you're just a YouTube tutorial away from getting
      started!
    </p>
    <p>
      Select <b>3</b> from the below choices depending on what your end goal is;
      selecting a project will take you to a
      <b>YouTube</b> tutorial that will get you started:
    </p>
    <h2><b class="pt-2 text-blue-600">FULLSTACK PROJECTS</b></h2>
    <ul class="flex flex-col gap-2">
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        An E-Commerce Store with checkout
      </li>
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        A Full MERN Stack Project
      </li>
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        Personal Blog with database
      </li>
    </ul>
    <h2><b class="pt-2 text-blue-600">FRONTEND PROJECTS</b></h2>
    <ul class="flex flex-col gap-2">
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        Data Visualization site, perhaps a Covid Stats platform, driven by a data
        API.
      </li>
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        React app that beautifully consumes an API and boasts a responsive design.
      </li>
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        A game of your choise (chess, pacman etc.)
      </li>
    </ul>
    <h2><b class="pt-2 text-blue-600">BACKEND PROJECTS</b></h2>
    <ul class="flex flex-col gap-2 mb-4">
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        Web Scraper Server that doubles as an API.
      </li>
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        An Evil Review Bot, randomizes reviews
      </li>
      <li class="flex items-center gap-4">
        <i class="fa-solid fa-bolt" />
        CRON Job Server, optimizing routines.
      </li>
    </ul>
    <h2 class="mb-20">
      <b class="text-blue-600">TIP</b>: Custom domain names → Appear more
      professional ($10 / each) + static websites are free to host.
    </h2>
  </JobAppSection>
  <JobAppSection sectionName={"RESUME"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i>You don't get what you want. You get what you do.</i>
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <p>
      All you need to know for your <b class="text-blue-600">Resume</b> is right
      here:
    </p>
    <a
      href="https://zety.com/blog/resume-statistics"
      target="_blank"
      class="flex items-center gap-4"
    >
      <i class="fa-solid fa-link" />
      <p class="break-all underline">
        Resume Statistics: We Analyzed 125,000+ Resumes, Here's What We Learned
      </p>
      <i class="fa-solid fa-link" />
    </a>
    <a
      href="https://cultivatedculture.com/resume-statistics/"
      target="_blank"
      class="flex items-center gap-4"
    >
      <i class="fa-solid fa-link" />
      <p class="break-all underline">
        Resume Statistics 2022 (Analysis of 133,000 Documents)
      </p>
      <i class="fa-solid fa-link" />
    </a>
    <a
      href="https://www.zippia.com/advice/resume-statistics/"
      target="_blank"
      class="flex items-center gap-4"
    >
      <i class="fa-solid fa-link" />
      <p class="break-all underline">
        40+ Awesome Resume Statistics [2023]: What Job Seekers Need To Know
      </p>
      <i class="fa-solid fa-link" />
    </a>
    <a
      href="https://financesonline.com/resume-statistics/"
      target="_blank"
      class="flex items-center gap-4"
    >
      <i class="fa-solid fa-link" />
      <p class="break-all underline">
        83 Must-Know Resume Statistics: 2023 Data on Length, Cover Letters &
        Valuable Skills
      </p>
      <i class="fa-solid fa-link" />
    </a>
    <a
      href="https://www.forbes.com/sites/susanadams/2014/03/17/the-best-and-worst-words-to-use-on-your-resume/?sh=596a552848cf"
      target="_blank"
      class="flex items-center gap-4"
    >
      <i class="fa-solid fa-link" />
      <p class="break-all underline">
        Forbes - The Best And Worst Words To Use On Your Résumé
      </p>
      <i class="fa-solid fa-link" />
    </a>
    <p class="mb-20" />
  </JobAppSection>
  <JobAppSection sectionName={"INTERVIEW"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i
        >When has playing it safe (a.k.a. doing what everyone else is doing)
        ever resulted in a remarkable outcome?</i
      >
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <a
      href="https://www.youtube.com/watch?v=ii9NLvcAfpE&ab_channel=CS50"
      target="_blank"
      class="flex items-center gap-4 pb-4 mb-12"
    >
      <i class="fa-solid fa-link" />
      <p class="break-all underline">
        How to Prepare for Technical Interviews, with CS50's own Tommy
        MacWilliam '13
      </p>
      <i class="fa-solid fa-link" />
    </a>

    <div class="flex items-center gap-4">
      <i class="fa-solid fa-laptop" />
      <b class=""><span class="text-blue-700">TECHNICAL</span></b>
      <i class="fa-solid fa-laptop" />
    </div>

    <a
      href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
      target="_blank"
      class="flex items-center gap-4"
    >
      <p class="break-all underline">Master Code Interview Course</p>
    </a>
    <a
      href="https://neetcode.io/courses"
      target="_blank"
      class="flex items-center gap-4"
    >
      <p class="break-all underline">NeetCode Courses</p>
    </a>
    <a
      href="https://leetcode.com/explore/"
      target="_blank"
      class="flex items-center gap-4 mb-20"
    >
      <p class="break-all underline">
        Leetcode Easy ( Few mediums → optional )
      </p>
    </a>

    <div class="flex items-center gap-4">
      <i class="fa-solid fa-mask" />
      <b class=""><span class="text-blue-700">BEHAVIORAL</span></b>
      <i class="fa-solid fa-mask" />
    </div>

    <p>
      Why do interviewers ask behavioral questions? Your past behavior dictates
      your future behavior.
    </p>
    <i class="mb-4"
      >They usually start with: Tell me about a time… Give me an example of…</i
    >
    <ol class="flex flex-col gap-2 list-decimal list-inside mb-16">
      <li class="mb-2">
        <b class="text-blue-600">Teamwork</b> (how you deal with other people)
        <h2 class="mb-1">
          <b>Question</b>: Describe the types of teams you've been involved
          with. What were your roles?
        </h2>
        <p>
          <b>Answer</b>: Improved the performance of an app you worked on by
          learning about useMemo and useCallback
        </p>
      </li>

      <li class="mb-2">
        <b class="text-blue-600">Problem solving</b> (how you find solutions)
        <h2 class="mb-1">
          <b>Question</b>: Tell me about an interesting technical problem you
          solved!
        </h2>
        <p>
          <b>Answer</b>: Chose a specific technology for a project (react)
        </p>
      </li>

      <li class="mb-2">
        <b class="text-blue-600">Leadership</b> (or how you take the initiative)
        <h2 class="mb-1">
          <b>Question</b>: Tell me about a time you went above and beyond your
          duties!
        </h2>
        <p>
          <b>Answer</b>: Chose a specific technology for a project (react)
        </p>
      </li>

      <li class="mb-2">
        <b class="text-blue-600">Interpersonal skills</b> (or how you deal with
        conflicts)
        <h2 class="mb-1">
          <b>Question</b>: Give me an example situation where you had
          difficulties with a team member!
        </h2>
        <p>
          <b>Answer</b>: Conflict over coding styles, resolved through open
          communication and finding a middle ground
        </p>
      </li>

      <li>
        <b class="text-blue-600">Failure, pressure, or stress.</b>
        <h2>
          <b>Question 1</b>: Tell me about a time when you failed. How did you
          handle it?
        </h2>
        <h2 class="mb-1">
          <b>Question 2</b>: Describe a stressful situation at school/work. How
          did you handle it?
        </h2>
        <p><b>Answer</b>: Failing to deploy the app to production</p>
      </li>
    </ol>

    <div class="flex items-center gap-4">
      <i class="fa-solid fa-puzzle-piece" />
      <b class=""><span class="text-blue-700">CULTURE FIT</span></b>
      <i class="fa-solid fa-puzzle-piece" />
    </div>

    <ul class="flex flex-col gap-2 list-disc list-inside pt-4">
      <a
        href="https://blog.hubspot.com/marketing/what-is-your-greatest-weakness"
        target="_blank"
        class="flex items-center gap-4"
        ><b class="text-blue-600">What is your greatest strenght / weakness?</b>
      </a>

      <li>List 5-7 of your strengths</li>
      <li class="mb-4">List 3-5 of your weaknesses</li>

      <b class="text-blue-600">Tell me about yourself. Your pitch</b>
      <li>
        Why do you want to work for us? <a
          href="https://www.keyvalues.com/"
          target="_blank"
          class="underline"
        >
          Key values</a
        >
      </li>
      <li>How do you handle stress (and pressure)?</li>
      <li>Where do you see yourself in 5 years from now?</li>
      <li>
        <a
          href="https://www.indeed.com/career-advice/interviewing/what-gets-you-out-of-bed-interview-question"
          tabindex="_blank"
          class="underline"
        >
          What gets your fired up and leaping out of bed in the morning?</a
        >
      </li>
      <li class="mb-4">Tell me about yourself. Your pitch</li>

      <b class="text-blue-600">What do you like about software engineering?</b>
      <li>The building aspect?</li>
      <li>The breaking things down?</li>
      <li>Constant learning?</li>
      <li>Solving difficult problems?</li>
      <li class="mb-4">The end product? Putting all the pieces together?</li>

      <b class="text-blue-600"
        >How do you keep up with current trends and advances in the field?</b
      >
      <li>Youtube?</li>
      <li>Courses?</li>
      <li>Podcast?</li>
      <li>Medium?</li>
      <li>Newsletters?</li>
      <li class="mb-4">People on Twitter?</li>

      <b class="text-blue-600">What is your ideal job?</b>
      <li>Culture</li>
      <li>Product</li>
      <li class="mb-4">Size of Company</li>

      <b class="mb-4"
        ><a href="https://www.keyvalues.com/" target="_blank" class="underline"
          >What is your ideal company?</a
        ></b
      >

      <b class="text-blue-600">Why do you want to work for this company?</b>
      <li>What environment do you thrive in the most?</li>
      <li>
        What would you want your company's culture to be if you were starting a
        company from scratch?
      </li>
      <li>
        Describe the perfect job, company, and work environment for you. Which
        factors are most important?
      </li>
      <li>What drives your passion?</li>
    </ul>

    <p class="mb-20" />
  </JobAppSection>
  <JobAppSection sectionName={"NETWORKING"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i
        >Success favors the bold, aggressive, risk-taking, no-excuse-making
        sharks.</i
      >
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <p class="mb-4">
      Tapping into networking can dramatically boost your chances in the
      competitive job arena. There's a myriad of strategies to harness
      professional networking during your job search, but here are my top picks:
    </p>

    <div class="flex items-center gap-4">
      <i class="fa-solid fa-search" />
      <b class=""><span class="text-blue-700">SEARCH QUERIES</span></b>
      <i class="fa-solid fa-search" />
    </div>

    <ul class="flex flex-col gap-2 list-disc list-inside pt-4 mb-16">
      <b class="text-blue-600">LinkedIN Job Search Queries:</b>
      <li class="mb-2">
        "junior" AND front end AND (NOT senior NOT sr NOT mid NOT intern)
      </li>

      <b class="text-blue-600"> Networking with Recruiters Queries: </b>
      <li>technical recruiter AND “we're hiring”</li>
      <li>CTO AND “we're hiring”</li>
      <li>react AND "we're hiring"</li>
    </ul>

    <ul class="flex flex-col gap-2 list-disc list-inside pt-4 mb-16">
      <div class="flex items-center gap-4 mb-4">
        <i class="fa-solid fa-envelope" />
        <b class=""
          ><span class="text-blue-700">REACHING OUT TO RECRUITERS</span></b
        >
        <i class="fa-solid fa-envelope" />
      </div>
      <li class="flex items-center gap-4">
        <div class="flex flex-col gap-1">
          <b class="text-blue-600"> 1. Build touchpoint </b>
          <li class="mb-10">
            Like & comment on a photo/post you resonated with - if relevant
          </li>

          <b class="text-blue-600">2. Reaching out</b>
          <b>#1 Message - Connection Request</b>
          <i class="mb-2">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            [YOU]: Hello [NAME], “I saw you that are a [POSITION] in [CITY]” or “at
            [COMPANY]”. I'd appreciate the possibility of networking with you! Kind
            regards, [YOUR NAME]
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <b class="mb-3">Or just use ➡️</b>

          <i class="mb-2">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            Dear *****, I recently came across your profile and was impressed by
            the work your company is doing. I would love the opportunity to contribute
            my skills and experience to your team. Is there a moment we can connect
            to discuss potential opportunities?
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <i class="mb-2">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            Dear ***** I wanted to reach out because I've been following your company's
            growth and success, and I believe my background in data analysis aligns
            perfectly with your organization's goals. I would appreciate the chance
            to explore any open positions you may have
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <i class="mb-2">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            Dear ******, I recently discovered your company and was immediately drawn
            to its innovative approach and culture. As a business analyst with 2
            years of experience, I believe I could contribute to your team's success.
            I would be grateful for the opportunity to chat about potential synergies
            between my skills and your organization.
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <i class="mb-2">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            Dear *****, I recently came across your profile and was impressed by
            the work your company is doing. I would love the opportunity to contribute
            my skills and experience to your team. Is there a moment we can connect
            to discuss potential opportunities?
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <i class="mb-10">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            Dear *****, I wanted to reach out and express my admiration for the work
            your team is doing at your firm. As someone who shares your passion for
            engineering, I would love to connect and discuss any current or future
            career opportunities at your esteemed organization.
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <b>#2 Message - After Connection is accepted</b>

          <i class="mb-10">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            [YOU]: Hi [NAME], thanks for accepting my contact invitation. I'm a React
            Frontend Dev looking into the market to fill in a position where my skills
            can be a good fit. Is this relevant to you at the moment? [YOUR NAME]
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <b class="text-blue-600">3. Build rapport - if necessary</b>
          <i>
            (continue conversation; don't overwhelm them with questions going
            into interview mode)
          </i>
          <li>Build commonalities</li>
          <li>Help them feel comfortable about opening up</li>
          <li>Empathize</li>
          <li>Reward investment</li>
          <li class="mb-10">Mix in humor</li>

          <b class="text-blue-600">4. Permission</b>
          <p class="mb-10">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            <b>[YOU]</b>: Have you found the developer you were looking for or
            are you still looking?
            <br />
            <b>[Recruiter]</b>: (99% of the time they will say they are still
            looking) No, Still looking
            <br />
            <b>[YOU]</b>: Got it! Do you mind me asking you a few questions
            about the roles you currently have available?
            <br />
            <b>[Recruiter]</b>: Sure!
            <br />
            <b>[YOU]</b>: What kind of stack are you currently looking to hire
            for? Are you looking to fill a new position or are you looking to
            replace someone?
            <br />
            <b>[Recruiter]</b>: Answer
            <br />
            <b>[YOU]</b>: For how long have you been looking for a developer?
            <br />
            <b>[YOU]</b>: -acknowledge what they said-, that makes sense. Are
            you open to having a 15 min call and see if I might be the right fit
            to fill that position?
            <br />
            <b>[Recruiter]</b>: Sure || Send me your CV -then should be able to
            schedule the call-
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </p>

          <b class="text-blue-600">5. Hook them in 🎣🪝</b>
          <i class="mb-10">
            <i class="fa fa-quote-left" aria-hidden="true"></i>
            I am a self-taught React developer who began coding three years ago during
            the pandemic. To enhance my skills, I recently completed a frontend development
            bootcamp. Throughout my journey, I've successfully crafted numerous applications,
            one of which caught the attention of a prominent web3 marketing agency
            called Darknight Labs. They acquired my mint tracking tool, which has
            become a valuable asset for their portfolio. Darknight Labs boasts an
            impressive clientele, including established web2 companies like L'Oréal
            and Assassin's Creed, as well as prominent web3 projects such as Alex
            Becker's Neo Tokyo, vVv, and Steady Stack.
            <br class="mb-2" />
            I am excited to progress in my career and believe your company aligns
            perfectly with my aspirations. Your exceptional culture and growth opportunities
            make me a valuable addition to your team. Thank you for considering my
            interest, and I am eager to explore how my skills can positively impact
            your projects.
            <br class="mb-2" />
            In addition to this accomplishment, I am also part of a web3 agency called
            Zylar. Our expertise lies in creating fully functional and visually stunning
            websites infused with web3 functionality. Our services cater to the evolving
            demands of the modern digital landscape, bridging the gap between traditional
            web2 companies and the innovative world of web3.

            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </i>

          <p>
            Engage in these insightful chats: uncover crucial job skills, gather
            project feedback, and possibly secure a referral. It's a stepping
            stone to your dream developer role.
          </p>
        </div>
      </li>
    </ul>
    <p class="mb-20" />
  </JobAppSection>
  <JobAppSection sectionName={"SKILLS"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i>Excellence is going the extra mile.</i>
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <p>
      In this section I just wanted to speak to one skill in particular <b
        class="text-blue-600">COMMUNICATION</b
      >
    </p>
    <p>
      When scores of applicants match your coding prowess and portfolio depth,
      what truly distinguishes you? <i
        >It's your ability to <b class="text-blue-600">communicate</b></i
      >. While your coding competence is essential, your approachability can
      seal the deal.
    </p>
    <p>
      Always remain gracious, whether it's a triumph or a setback. Sprinkle your
      interactions with kindness - a simple "Thank you for the chance" or "Hope
      your week's off to a great start" can be transformative. Display warmth,
      receptiveness, and perhaps a touch of humor - these can be the intangibles
      that land you that role. Also, feedback is inevitable; embrace it with
      humility and gratitude.
    </p>
    <p class="mb-4">
      Remember, you're navigating early in your developer journey, and feedback
      will be your frequent companion. So, keep the energy positive. Consider
      this handy template:
    </p>
    <p>
      <i>
        <i class="fa fa-quote-left" aria-hidden="true"></i>

        Hi [RECRUITER],
        <br />
        Hope your week's kicking off splendidly! 😊
        <br />
        Thanks for your time today. I genuinely value the chance to ...
        <br />
        Best wishes, [YOU]
        <i class="fa fa-quote-right" aria-hidden="true"></i>
      </i>
    </p>
    <p class="mb-20" />
  </JobAppSection>
  <JobAppSection sectionName={"FINAL STEP"}>
    <h2 class="pb-5">
      <i class="fa fa-quote-left" aria-hidden="true"></i>
      <i>Excellence is going the extra mile.</i>
      <i class="fa fa-quote-right" aria-hidden="true"></i>
    </h2>
    <h2>
      Stay persistent, patient, <b class="text-blue-600"
        >and relentesly chase your goal!</b
      >
    </h2>
    <p>
      After a setback, refresh your portfolio by substituting a less impressive
      project with one that outshines the rest. Once you secure that role, your
      wealth of knowledge will ensure you start strong and keep moving forward.
    </p>
    <p class="mb-20" />
  </JobAppSection>
  <a href="/" class="my-10 flex items-center gap-2 mx-auto">
    <h4>BACK <span class="text-blue-700">HOME</span></h4>
    <i class="fa-solid fa-house" />
  </a>
</main>
