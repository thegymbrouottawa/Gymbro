import Layout from "@/components/Layout";

const PowerOfSleep = () => {
  return (
    <Layout>
      <section className="bg-white rounded-lg p-8 my-12 shadow-lg max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gymbro-orange mb-4">
          The Power of Sleep in Physical and Mental Fitness
        </h1>
        <p className="text-gray-700 mb-6 font-semibold">By: Eva Milinkovic</p>

        <h2 className="text-xl font-semibold mb-3">Introduction</h2>
        <p className="mb-6 text-gray-800">
          Sleep is as important to our physical health as nutrition and exercise are. It supports our metabolism, our growth and development, and helps us process the information we take in throughout the day helps us process the information we take in throughout the day. In spite of these benefits, life can get busy, and time is scarce, so we can’t help but be tempted to put off a good night's sleep to fit in other pursuits. University students are a group particularly inclined to avoid sleep: late-night studying in preparation for the next day’s midterm, time spent on social media, and the maintenance of a healthy social life are all a vast number of reasons a young adult has to lose a couple hours’ sleep every night. As rewarding as these pursuits can be, the cost may outweigh the benefits. It is often believed in the fitness community, especially by newcomers, that as long as you remain physically active by pursuing strength training or cardiovascular workouts, you can mitigate all kinds of adverse health effects. In actuality, the impact a lack of sleep can have on our brain and body can temper the hard work of even the most avid gym-goer.
        </p>

        <h2 className="text-xl font-semibold mb-3">The Science of Sleep</h2>
        <p className="mb-6 text-gray-800">
          For the most part, sleep can seem like a mysterious and difficult to understand process. After all, we aren’t ever conscious for it! However, the cycle of sleep can be defined into four distinct categories based on the electrical activity of our brain at the time.
        </p>
        <p className="mb-6 text-gray-800">
          The four stages of sleep are as follows: N1, N2, N3, and REM.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li><strong>N1</strong>, or non-rapid eye movement 1: The lightest of sleep. Typically lasts about 5-10 minutes and only occurs in the first enactment of the sleep cycle.</li>
          <li><strong>N2</strong>, or non-rapid eye movement 2: Important for learning and memory consolidation.</li>
          <li><strong>N3</strong>, or non-rapid eye movement 3: The deepest level of sleep. This is the time when the body repairs and regrows tissues such as bone and muscle and strengthens the immune system.</li>
          <li><strong>REM</strong>, or rapid eye movement: Important for learning and memory consolidation. It is in this stage that we dream.</li>
        </ul>
        <p className="mb-6 text-gray-800">
          Sleep is defined as a cycle, meaning these stages (except for N1) occur multiple times throughout the night. In eight hours of sleep a person can repeat this cycle four to six times, as each cycle lasts on average 90 minutes. With each subsequent cycle, the length of N3 shortens (from 40 to 20 minutes) while the length of REM sleep lengthens (from 10 to 60 minutes). Because of this, it is important to get an average of 8 hours of sleep to reap all the benefits each sleep cycle offers. The amount of sleep young adults need may also differ based on sex. A 2014 study from the National Library of Medicine shows that women need slightly more sleep than men (though not a significant amount).
        </p>

        <h2 className="text-xl font-semibold mb-3">The consequences of not getting enough sleep</h2>
        <p className="mb-2 text-gray-800"><strong>Short-term consequences:</strong> Fatigue, reduced focus, increased appetite, increased stress levels, lowered immune system function.</p>
        <p className="mb-6 text-gray-800"><strong>Long-term consequences:</strong> Chronic conditions (diabetes, cardiovascular disease, obesity/metabolic disorders), dementia, worsening symptoms of gastrointestinal disorders, hormonal imbalance.</p>

        <h2 className="text-xl font-semibold mb-3">The Connection Between Sleep, Muscle Recovery, and Athletic Performance</h2>
        <p className="mb-6 text-gray-800">
          Sleep is essential for muscle repair, athletic performance, and injury prevention. The N3 stage of sleep is the time where the body releases growth hormone to carry out tissue, muscle, and bone repair. There are several physiological changes occurring, such as the release of metabolic hormones and increased blood flow to muscles, allowing them to receive oxygen and nutrients. During sleep, the body releases testosterone, GH (growth hormone), and IGF-1 (insulin-like growth factor 1), which are anabolic (building-up) hormones that contribute to protein synthesis. Without sleep, not only is the output of these anabolic hormones decreased, but the output of catabolic (breaking-down) hormones increases. There is a greater release of myostatin and glucocorticoids, which cause protein degradation. If lack of sleep is chronic, these hormones can lead to muscle atrophy, decreased muscle stem cell differentiation and proliferation, and a worse recovery capacity. This means that even with adequate protein intake, a consistent workout schedule, and set recovery days, your gains will be limited and you leave yourself open to injury.
        </p>
        <p className="mb-6 text-gray-800">
          Sleep also has a large effect on cognitive function. Sleep deprivation is associated with reduced metabolic activity within a variety of brain regions important for alertness, error detection, balance, motor control, and information processing, including the prefrontal and parietal cortices, anterior cingulate, thalamus, basal ganglia and cerebellum. A decrease in metabolic activity decreases our accuracy, reaction time, and decision making, which can all affect athletic performance.
        </p>

        <h2 className="text-xl font-semibold mb-3">Tips for Better Sleep</h2>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>Create a sleep-friendly environment by sleeping in a dark, cool room with whatever sounds or smells relax you.</li>
          <li>Practice good sleep hygiene habits: a consistent schedule, avoiding caffeine throughout the day but especially after noon, and reducing screen time (if possible, leave them out of the room!).</li>
          <li>Don’t do any school work, studying, or otherwise stressful activity in your bed, as associating anxiety with the place you sleep can reduce the time and quality of your sleep greatly.</li>
          <li>Power naps of about 20 minutes can leave you feeling refreshed, but if you enter the deepest stage of sleep (N3) while napping, you’ll feel less refreshed than before you took the nap.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
        <p className="mb-6 text-gray-800">
          Sleep is a fundamental aspect of both physical and mental health, as it plays a crucial role in processes such as memory consolidation, muscle recovery, and cognitive function. Insufficient sleep has both short-term and long-term consequences for students, athletes, and bodybuilders alike: sleep deprivation impairs athletic performance, reduces cognitive abilities, and increases the risk of various chronic health conditions. By prioritizing sleep and establishing healthy sleep habits, such as maintaining a consistent sleep schedule and creating a sleep-friendly environment, individuals can improve their academic performance, overall well-being, and athletic abilities. Ultimately, balancing a good quality of rest with other pursuits, such as studying and going out, is vital for optimizing both mental and physical health in the long run.
        </p>

        <p className="text-gray-600 italic">
          Disclaimer: not medical professionals. If you have concerns, contact your doctor.
        </p>
      </section>
    </Layout>
  );
};

export default PowerOfSleep;
