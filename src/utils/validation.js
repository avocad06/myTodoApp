export function FormCheck(word) {
    const term = word.trim()
    // 양 끝 공백을 제거한 글자의 수가 0이라면, 공백 뿐이라면
    if (term.length === 0) {
        return null
    }
    return term
}