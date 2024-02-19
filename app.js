const breakCaptcha = (captcha, cb) => {
    setTimeout(() => {
        try {
            let solution = captcha.split("");
            cb(null, solution);
        } catch (error) {
            cb(error, null);
        }
    }, 1000); // AI delay 1 sec+-+
};

// использования функции breakCaptcha с обработкой ошибок
breakCaptcha("123456", (error, solution) => {
    if (error) {
        console.error("Error occurred:", error);
        // Обработка ошибки
    } else {
        console.log("Captcha solution:", solution);
        //действия с решением капчи
    }
});

// //HW1: find out how to add the error handling
// //HW2: finish the diagram
