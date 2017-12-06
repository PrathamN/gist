
        function PrintNumbers() {
            var text = '';
        for (i = 1; i <= 100; i++) {
            if (i % 3 === 0)
                text = text + i.toString() + "Earth";
            if (i % 5 === 0)
                text = text + i.toString() + "Jupiter ";
            if (i % 9 === 0)
                text = text + i.toString() + "Pluto";
        }      
        console.log(text);
    }
