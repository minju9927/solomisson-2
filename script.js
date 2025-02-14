const input = document.querySelector('.userInput')
const wordDisplay = document.querySelector('.currentWord')
const btn = document.querySelector('.submitButton')
const msg = document.querySelector('.message')


let word = '바나나'

wordDisplay.textContent = word

// 끝말잇기 시작!
msg.textContent = '끝말잇기 시작!'


function check() {

    const userWord = input.value.trim()

    // console.log(userWord);
    if (!userWord) {
        msg.textContent = '단어를 입력하세요'
        return
    }

    const lastChar = word[word.length - 1]
    // console.log(lastChar, userWord[0])

    if (lastChar !== userWord[0]) {
        msg.textContent = '"${lastCha}"(으)로 시작되는 단어를 입력하세요'
        input.value = ''
    }
    else {
        msg.textContent = '성공 다음!'
        input.value = ''
        wordDisplay = textContent = word
        input.value = ''
    }

}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        check()
    }
})


btn.addEventListener('click', () => {
    check()

})


