const data=[
    {
        question: 'If x + 6 = 9, then 3x + 1 =',
        answers: [
            '3','9','10','34','46'
        ],
        correctAnswer: '10',
        answerExplain: 'Solving for x leaves x = 3, and then substituting into 3x + 1 gives 3(3) + 1, or 10.'
    },
    {
        question: 'What is the greatest common factor of the numbers 18, 24, and 30?',
        answers: [
            '2','3','4','6','12'
        ],
        correctAnswer: '6',
        answerExplain: 'The largest number that divides evenly into 18, 24, and 30 is 6.'
    },
    {
        question: 'Which of the following is equal to 1/5 of 0.02 percent?',
        answers: [
            '0.4','0.04','0.004','0.0004','0.00004'
        ],
        correctAnswer: '0.00004',
        answerExplain: `Simplifying this problem first means changing 1/5 to .2. Next change 0.02 percent to 0.0002 (that is, .02 X .01 = 0.0002). Now that you have simplified the problem, multiply .2 X 0.0002, which gives 0.00004.`
    },
    {
        question: 'Alan has two more than twice as many chocolates as does Alice, and half as many chocolates as does Nadia. If Alice has ‘a’ number of chocolates, then in terms of ‘a’, how many chocolates do Alan, Alice and Nadia have?',
        answers: [
            '2a+4','5a+5','6a+7','7a+6','9a+4'
        ],
        correctAnswer: '7a+6',
        answerExplain: 'Alice has a chocolates. Alan has 2a+2 chocolates. Nadia has 4a+4 chocolates. Total chocolates is 7a+6.'
    },
    {
        question: 'The width of a rectangle is 2/3 times its length. If the length is calculated to be 9, what is the value of perimeter for this rectangle?',
        answers: [
            '36','9','12','54','30'
        ],
        correctAnswer: '30',
        answerExplain: 'The width of the rectangule is (2/3)*9=6. The perimeter is (6+9)*2=30.'
    },
    {
        question: 'If the largest side of a triangle is A, and the other two sides are B and C. What relation exists between them?',
        answers: [
            'A=B+C','A>B+C','A=|B-C|','A>|B-C|','A=pi*|A-C|'
        ],
        correctAnswer: 'A>|B-C|',
        answerExplain: 'In a triangle, the sum of the lengths of two sides of a triangle must always be greater than the length of the third side and the different of the lengths of two sides must always be smaller than the length of the third side.'
    },
    {
        question: 'A line l is parallel to the y-axis and passes through the point (2,3). What is its gradient (m) and x-intercept?',
        answers: [
            'm= 0 , x= (3,0)','m= ∞ , x= (2,0)',' m= 0 , x= (2,0)',' m= ∞ , x= (3,0)','m= 2 , x= (0,0)'
        ],
        correctAnswer: 'm= ∞ , x= (2,0)',
        answerExplain: 'Parallel lines have the same slope, the x-intercept is (2, 0). The gradient(slope) tends to infinity.'
    },
    {
        question: 'Milk needs to be thinned to a ratio of 3 parts milk to 2 parts water. The milk-man has by mistake added water so that he has 8 liters of milk which is half water and half milk. What must he add to make the proportions of the mixture correct?',
        answers: [
            '1 liter milk','1 liter water','2 liter milk','1.5 liter water','3 liter milk'
        ],
        correctAnswer: '2 liter milk',
        answerExplain: 'He has 4 liter of water and 4 liter of milk. If 4 liter is 2 part then 3 part is 6 liter. So he need to add 6-4=2 liter of milk.'
    },
    {
        question: `An employee's annual salary was increased $15,000. If her new annual salary now equals $90,000, what was the percent increase?`,
        answers: [
            '15%','16%','20%','22%','24%'
        ],
        correctAnswer: '20%',
        answerExplain: `Percent increase = change/starting point. If the employee's salary was increased $15,000 to $90,000, then the starting salary was 90,000 - 15,000 = 75,000. Therefore, percent increase = 15,000/75,000 = 1/5 = 20%.`
    },
    {
        question: 'A certain pet store sells only dogs and cats. In March, the store sold twice as many dogs as cats. In April, the store sold twice the number of dogs that it sold in March, and three times the number of cats that it sold in March. If the total number of pets the store sold in March and April combined was 500, how many dogs did the store sell in March?',
        answers: [
            '80','100','120','160','180'
        ],
        correctAnswer: '100',
        answerExplain: 'If number of dog sold is D, number of cat sold is C. In March the store sold D=2C and C. In April, the store sold 2D=4C and 3C. Total we have 2C+C+4C+3C=10C=500. Therefor C=50. D=2*50=100.'
    },
];