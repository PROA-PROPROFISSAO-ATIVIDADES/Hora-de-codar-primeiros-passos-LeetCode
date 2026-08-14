// two pointers

function isPalindrome(x) {
    const words = Array.from(String(x))
    let start = 0
    let end = words.length -1;

    while(start <= end){
        if(words[start] != words[end]){
            return false;
        }

        console.log("start", words[start], "end", words[end])

        start++
        end--
    }
    return true
};

console.log(isPalindrome(101))  