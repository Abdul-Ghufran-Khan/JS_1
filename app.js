        // Part 1
        var no_series = +prompt("Enter a length of fabonacci series")
        var a = 0, b = 1, sum2;
        document.write("FABONACCI SERIES : ")
        for (let i = 1; i <= no_series ; i++) {
            document.write(`${a},`)
              sum2 = a + b;
              a = b;
              b = sum2;
        }
        

        // Line 
        document.write("<hr/>")

        // Part 2
        var vowels = ["a","e","i","o","u"]
        var int_user = prompt("Enter string to check vowels")
        var counts = 0
        for (let i = 0; i < int_user.length; i++) {
           for (let j = 0; j < vowels.length; j++) {
            if (int_user[i].toLowerCase() == vowels[j]) {
            counts++
           } 
           } 
        } 
        document.write(`The number of vowels in ${int_user} is : ${counts}`)

        // Line 
        document.write("<hr/>")

        // Part 3
        var fact_int = +prompt("Enter an integer for factorial")
        var fact = 1
        for (let i = fact_int; i >=1; i--) {
            fact *= i
        }
        document.write(`The factorial of ${fact_int} is : ${fact}`)

        // Line 
        document.write("<hr/>")

        // Part 4
        var no_input = +prompt("Enter integers values for sum of digits")
        var co_st = no_input.toString().split("").map(Number)
        var total = 0
        for (let i = 0; i < co_st.length; i++) {
            total += co_st[i] 
        }
        document.write(`The total sum of digits of ${no_input} is : ${total}`)

        // Line 
        document.write("<hr/>")

        // Part 5
        var listed = [1,2,3,4,5]
        var war = listed.toString().split("").reverse().join("")
        document.write(`Original list : [${listed}]<br/>`)
        document.write(`After reverse : [${war}]`)