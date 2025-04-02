// Questão 1
document.getElementById('submit1').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer1"]:checked');
    const resultContainer = document.getElementById('result1');

    if (!selectedAnswer) {
        resultContainer.innerText = 'Por favor, selecione uma resposta.';
        return;
    }

    const answerValue = parseInt(selectedAnswer.value);
    const correctAnswer = 24; // A resistência correta é 24 ohms

    if (answerValue === correctAnswer) {
        resultContainer.innerText = 'Correto! A resistência é 24 ohms.';
    } else {
        resultContainer.innerText = 'Incorreto. A resistência correta é 24 ohms.';
    }
});

// Questão 2
document.getElementById('submit2').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer2"]:checked');
    const resultContainer = document.getElementById('result2');

    if (!selectedAnswer) {
        resultContainer.innerText = 'Por favor, selecione uma resposta.';
        return;
    }

    const answerValue = parseFloat(selectedAnswer.value);
    const correctAnswer = 2.89; // A corrente correta é aproximadamente 2,89 A

    if (Math.abs(answerValue - correctAnswer) < 0.01) {
        resultContainer.innerText = 'Correto! A nova corrente é aproximadamente 2,89 A.';
    } else {
        resultContainer.innerText = 'Incorreto. A nova corrente correta é aproximadamente 2,89 A.';
    }
});

// Questão 3
document.getElementById('submit3').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer3"]:checked');
    const resultContainer = document.getElementById('result3');

    if (!selectedAnswer) {
        resultContainer.innerText = 'Por favor, selecione uma resposta.';
        return;
    }

    const answerValue = parseInt(selectedAnswer.value);
    const correctAnswer = 2; // A nova corrente correta é 2 A

    if (answerValue === correctAnswer) {
        resultContainer.innerText = 'Correto! A nova corrente é 2 A.';
    } else {
        resultContainer.innerText = 'Incorreto. A nova corrente correta é 2 A.';
    }
});

// Questão 4
document.getElementById('submit4').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer4"]:checked');
    const resultContainer = document.getElementById('result4');

    if (!selectedAnswer) {
        resultContainer.innerText = 'Por favor, selecione uma resposta.';
        return;
    }

    const answerValue = parseInt(selectedAnswer.value);
    const correctAnswer = 110; // A resistividade correta é 110.10^-8 Ω·m

    if (answerValue === correctAnswer) {
        resultContainer.innerText = 'Correto! A resistividade é 110.10^-8 Ω·m.';
    } else {
        resultContainer.innerText = 'Incorreto. A resistividade correta é 110.10^-8 Ω·m.';
    }
});

// Questão 5
document.getElementById('submit5').addEventListener('click', function() {
    const selectedAnswer = document.querySelector('input[name="answer5"]:checked');
    const resultContainer = document.getElementById('result5');

    if (!selectedAnswer) {
        resultContainer.innerText = 'Por favor, selecione uma resposta.';
        return;
    }

    const answerValue = parseFloat(selectedAnswer.value);
    const correctAnswer = 5.0 * Math.pow(10, -3); // A corrente correta é 5.0 x 10^-3 A

    // Comparação com uma margem de erro
    if (Math.abs(answerValue - correctAnswer) < 0.0001) {
        resultContainer.innerText = 'Correto! A corrente é 5,0 x 10^-3 A.';
    } else {
        resultContainer.innerText = 'Incorreto. A corrente correta é 5,0 x 10^-3 A.';
    }
});