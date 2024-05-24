const data = {
    message: ['"Wisdom lies in the simplicity of actions, the purity of thoughts, and the depth of purpose." - Miyamoto Musashi',
        '"True courage lies in facing oneself in the darkest hours." - Friedrich Nietzsche',
        '"Art is the soul in motion." - Vincent Van Gogh',
        '"Don’t worry about perfection. Instead, focus on progress and persistence." - Bruce Lee',
        '"Sometimes, freedom is found in the deepest solitude, where the true essence of existence is discovered." - Christopher McCandless'],
    creativeActivity: [
        ['Find a quiet place in nature, take deep breaths, and practice meditation, focusing on the simplicity of actions and the purity of thoughts. Let the purpose of finding clarity and peace guide your practice.',
            'Take a walk in a natural environment, observing the simplicity and harmony around you. While walking, reflect on your thoughts and intentions, seeking the depth of purpose in each step.'],
        ['Take time for self-assessment in the darkest hours, seeking to understand your emotions, thoughts, and behaviors. Face your fears and insecurities head-on, exploring your own nature with courage and honesty.',
            'Identify a significant personal challenge you have been avoiding. Take a brave step towards this challenge, facing it with determination and resilience, even in the most difficult times.'],
        ['Dedicate time to engage in a form of artistic expression that resonates with you, such as painting, drawing, writing, or music. Let your soul manifest through creative movement, exploring your emotions, thoughts, and experiences.',
            'Embark on a journey to discover and appreciate various forms of art in your community or online. Visit art galleries, attend live performances, read inspiring books, or explore artworks in nature. Allow yourself to be inspired by the diversity and beauty of artistic expression.'],
        ['Take time every day to engage in an activity that helps you improve in some area of your life, whether physical, mental, emotional, or spiritual. Focus on making consistent small progress and stay persistent in your efforts.',
            'Choose a skill you want to develop and set a clear plan to achieve this goal. Break the process into smaller steps and focus on advancing gradually, even if you encounter challenges along the way.'],
        ['Plan a silent retreat where you spend a day or a weekend alone, without external distractions. During this time, practice meditation, reflection, and journaling, exploring your deepest thoughts and feelings to discover the true essence of your existence.',
            'Take a long walk alone in a natural environment. Use this time to disconnect from technology and daily demands, focusing on the beauty and tranquility of nature around you. Allow yourself to reflect on your life and priorities, finding freedom in solitude.']
    ],
    magicMoment: [
        ['Participate in a traditional tea ceremony in a quiet garden at sunset. Feel the simplicity and depth of each movement and thought as you appreciate the ritual and beauty around you.',
            'Visit a temple or sacred place. Sit in silence and contemplate the architecture and spiritual symbols, reflecting on the depth of purpose and purity of thoughts that these places inspire.',
            'Find a Zen garden and meditate while observing the arrangement of stones and sand. Let the simplicity of the garden inspire purity in your thoughts and depth in your purpose.'],
        ['Spend a night awake, alone in a peaceful place, such as a beach or a mountain. Use this time to reflect deeply on your internal struggles and personal challenges, finding courage in the solitude and silence of the night.',
            'Participate in a guided therapy or self-exploration session, such as a family constellation or a shamanic journey, where you can face and confront your inner fears and shadows, emerging with a deeper understanding of yourself.',
            'Spend a night writing about your deepest thoughts and feelings by candlelight. Let the darkness around you intensify your introspection and courage as you confront your emotions.'],
        ['Organize a night dedicated to artistic creation, whether painting, writing, or playing music. Do this in an inspiring environment, such as a candlelit studio, allowing your soul to move freely through the art.',
            'Visit an art gallery at dawn, when it is empty and quiet. Walk slowly through the halls, absorbing each artwork and letting your soul connect with the artistic expressions in motion.',
            'Participate in or watch an outdoor artistic performance, such as a concert or a theater play in a park. Feel the art come to life in a natural environment, moving your soul through the interaction with the audience and nature.'],
        ['Start your day with a practice dedicated to your goal, such as yoga, martial arts, or writing, while the sun rises. Focus on the progress you make each day, appreciating each small advance.',
            'Create a visual progress journal, where you record your daily goals and achievements. At the end of each week, review your entries, celebrating your continuous progress and the persistence that brought you where you are.',
            'Climb a hill or a small mountain and take time at the top to reflect on your goals and progress. The broad view will serve as a reminder of how far you have come and inspire you to keep persisting.'],
        ['Spend a weekend camping alone in a secluded location. Completely disconnect from technology and the outside world, allowing yourself to live in harmony with nature and reflect deeply on your existence.',
            'Find a cave or a similar natural space and spend a few hours meditating there. The darkness and solitude of the environment will provide a unique space for introspection and discovery of the essence of your existence.',
            'Sit alone by the ocean at dawn, listening to the sound of the waves and feeling the breeze. Let the vastness and tranquility of the sea help you reflect on your freedom and inner essence.']
    ]
};

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

const generateUniverseRecommendation = (data) => {
    // Data validation
    if (data.message.length !== data.creativeActivity.length || data.message.length !== data.magicMoment.length) {
        throw new Error("Arrays must have the same length");
    }

    // Generate random indices
    const messageIndex = getRandomIndex(data.message);
    const activityIndex = getRandomIndex(data.creativeActivity[messageIndex]);
    const momentIndex = getRandomIndex(data.magicMoment[messageIndex]);

    // Access and store the content of the arrays with the generated indices
    const messageTarget = data.message[messageIndex];
    const activityTarget = data.creativeActivity[messageIndex][activityIndex];
    const momentTarget = data.magicMoment[messageIndex][momentIndex];

    // Return the complete combination with the possibilities for each program message
    return `Inspirational Message:\n${messageTarget}\n\nCreative Activity:\n${activityTarget}\n\nMagic Moment:\n${momentTarget}`;
}

//test

console.log(generateUniverseRecommendation(data));