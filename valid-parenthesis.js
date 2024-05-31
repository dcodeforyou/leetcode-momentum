// valid parenthesis - (([]{}))

let str = "(([]{}))";

console.log(validParenthesis(str));

function validParenthesis(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        switch (ch) {
            case ')':
                if (stack[stack.length - 1] != '(')
                    return false;
                stack.pop();
                break;
            case '}':
                if (stack[stack.length - 1] != '{')
                    return false;
                stack.pop();
                break;
            case ']':
                if (stack[stack.length - 1] != '[')
                    return false;
                stack.pop();
                break;
            default:
                stack.push(ch);
        }

        
    }

    return stack.length == 0;
}

