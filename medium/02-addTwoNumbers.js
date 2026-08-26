// Primeira tentativa (funcionaou mas o custo big O está muito alto)
{    
    var addTwoNumbers = function(l1, l2) {
        let currentList1 = l1
        let currentList2 = l2

        let number1 = []
        let number2 = []

        while(currentList1 !== null){
            number1.push(currentList1.val)
            currentList1 = currentList1.next
        }

        while(currentList2 !== null){
            number2.push(currentList2.val)
            currentList2 = currentList2.next
        }

        result = String(Number(number1.reverse().join('')) + Number(number2.reverse().join(''))).split('').reverse()

        console.log(result)

        let head = null;
        let current = null

        for (let n of result){
            console.log(n)
            let novoNo = new ListNode(Number(n))
            if(head === null){
                head = novoNo;
                current = novoNo;
            } else {
                current.next = novoNo;
                current = novoNo;
            }
        }

        return head;
    };
}

// meu codigo final
{
    var addTwoNumbers = function(l1, l2) {
        let i = 1;
        let number = 0;
        let current1 = l1;
        let current2 = l2;

        while(current1 !== null || current2 !== null){

            if(current1 != null){
                console.log(current1.val)
                number += current1.val * i
                current1 = current1.next
            }
            
            if(current2 != null) {
                console.log(current2.val)
                number += current2.val * i
                current2 = current2.next
            }

            i *= 10
        }

        result = String(number).split('').reverse()

        let head = null;
        let current = null

        for (let n of result){
            let novoNo = new ListNode(Number(n))
            if(head === null){
                head = novoNo;
                current = novoNo;
            } else {
                current.next = novoNo;
                current = novoNo;
            }
        }

        return head;
    }
}

// codigo da IA (O meu codigo funciona, mas tem um bug silencioso, js 
// não soma numeros muito grandes e o desafio disse que poderiam ter até 100 digitos,
// isso a gente resolve utilizando a tecnica de soma manual)

// obs não sabia dessa limitação do js até hoje.
{
    var addTwoNumbers = function(l1, l2) {
        let current1 = l1;
        let current2 = l2;
        let carry = 0;

        let head = null;
        let current = null;

        while (current1 !== null || current2 !== null || carry !== 0) {
            let val1 = current1 !== null ? current1.val : 0;
            let val2 = current2 !== null ? current2.val : 0;

            let soma = val1 + val2 + carry;
            let digitoResultado = soma % 10;
            carry = Math.floor(soma / 10);

            let novoNo = new ListNode(digitoResultado);

            if (head === null) {
                head = novoNo;
                current = novoNo;
            } else {
                current.next = novoNo;
                current = novoNo;
            }

            if (current1 !== null) current1 = current1.next;
            if (current2 !== null) current2 = current2.next;
        }

        return head;
    };
}