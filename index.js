const express = require('express')
const app = express()
const port = 3000
const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");
const shell = require('shelljs');

app.get('/', async (req, res) => {
    await shell.exec('npx cypress run');

    let data = await getDiff();

    res.send("Los % de diferencia para las 3 pruebas son: " + data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//Tomado de https://www.npmjs.com/package/resemblejs 
const getDiff = async () => {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "less"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function

    const data = await compareImages(
        await fs.readFile("./cypress/screenshots/vrt_color_pallete_spec.js/primera_paleta.png"),
        await fs.readFile("./cypress/screenshots/vrt_color_pallete_spec.js/segunda_paleta.png"),
        options
    );
    await fs.writeFile("./cypress/screenshots/vrt_color_pallete_spec.js/diferencias.png", data.getBuffer());
    console.log("***********data********* " + data.misMatchPercentage);

    var data1 = data.misMatchPercentage + "%";

    return data1;
}

