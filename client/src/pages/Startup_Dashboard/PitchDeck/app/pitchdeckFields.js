export const formSections = {
    'Info': [1, 2],
    'Reasons you want the funding': [[4, 5]],
    'Solutions you offer': [7, [8]],
    'Market Validation': [[10, 11]],
    'Market Size': [[13, 14]],
    'Details about your product': [16, [17]],
    'Business Model ': [19, [20, 21]],
    'Competition in the Market': [[23, 24]],
    'Competitive Advantages': [[26, 27]],
}

export const format = {
    'Info': ['nameOfCompany', 'description'],
    'Problems': ['problems'],
    'Solution': ['solutionDescription', 'solution'],
    'Market Validation': ['marketValidation'],
    'Market Size': ['marketSize'],
    'Product': ['productDescription', 'product'],
    'Business Model': ['businessModelDescription', 'businessModel'],
    'Competition': ['competition'],
    'Competitive Advantages': ['competitiveAdvantage'],
}

export const fields = {
    1: {
        id: 'nameOfCompany',
        title: 'Name of Company',
        style: {
            x: 1,
            y: 1.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "black" },
            color: "FFFFFF",
        }
    },
    2: {
        id: 'description',
        title: 'Description',
        style: {
            x: 1,
            y: 2.8,
            w: "80%",
            h: 1,
            fontSize: 23,
            align: "center",
            color: "#FFFFFF",
        }
    },
    3: {
        id: 'problems',
        title: 'Problems',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "D3E3F3" },
            color: "FFFFFF",
        }
    },
    4: {
        id: 'problemName',
        title: 'Problem Name',
        style: {
            x: 1,
            y: 1.5,
            w: "80%",
            h: 1,
            fontSize: 26,
            align: "left",
            // fill: { color: "D3E3F3" },
            color: "black",
        }
    },
    5: {
        id: 'problemDescription',
        title: 'Problem Description',
        style: {
            x: 1,
            y: 2,
            w: "80%",
            h: 1,
            fontSize: 18,
            align: "left",
            // fill: { color: "D3E3F3" },
            color: "black",
        }
    },
    6: {
        id: 'solution',
        title: 'Solution',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "D3E3F3" },
            color: "#3c3c3c",
        }
    },
    7: {
        id: 'solutionDescription',
        title: 'Solution Description',
        style: {
            x: 1,
            y: 1.5,
            w: "80%",
            h: 1,
            fontSize: 25,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "#b4b4b4",
        }
    },
    8: {
        id: 'solutionName',
        title: 'Solution Name',
        style: {
            x: 1,
            y: 2.5,
            w: "20%",
            h: 2,
            fontSize: 25,
            align: "center",
            fill: { color: "D3E3F3" },
            color: "#3c3c3c",
        }
    },
    9: {
        id: 'marketValidation',
        title: 'Market Validation',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "008899",
        }
    },
    10: {
        id: 'marketValidationName',
        title: 'Market Validation Name',
        style: {
            x: 2.5,
            y: 2.5,
            w: "20%", 
            fontSize: 36,
            align: "center",
            color: "black",
        }
    },
    11: {
        id: 'marketValidationDescription',
        title: 'Market Validation Description',
        style: {
            x: 2.5,
            y: 3.5,
            w: "20%",  
            fontSize: 18,
            align: "center",     
            color: "black",
        }
    },
    12: {
        id: 'marketSize',
        title: 'Market Size',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "black",
        }
    },
    13: {
        id: 'marketSizeName',
        title: 'Market Size Name',
        style: {
            x: 1,
            y: 2,
            w: 2,
            h: 2,
            fontSize: 25,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "ffffff",
        }
    },
    14: {
        id: 'marketSizeDescription',
        title: 'Market Size Description',
        style: {
            x: 1,
            y: 3.9,
            w: "20%",
            h: 2,
            fontSize: 17,
            align: "center",
            color: "000000",
        }
    },
    15: {
        id: 'product',
        title: 'Product',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "008899",
        }
    },
    16: {
        id: 'productDescription',
        title: 'Product Description',
        style: {
            x: 1,
            y: 1.5,
            w: "80%",
            h: 1,
            fontSize: 25,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "black",
        }
    },
    17: {
        id: 'image',
        title: 'Image Link',
        style: {
            x: 1,
            y: 2.5,
            w: "30%",
            h: 1.5,
            fontSize: 25,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "black",
            border:"blue",
            // shadow:"000000"
        }
    },
    18: {
        id: 'businessModel',
        title: 'Business Model',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "black",
        }
    },
    19: {
        id: 'businessModelDescription',
        title: 'Business Model Description',
        style: {
            x: 1,
            y: 1.5,
            w: "80%",
            h: 1,
            fontSize: 25,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "black",
        }
    },
    20: {
        id: 'businessModelData',
        title: 'Business Model Data',
        style: {
            x: 1,
            y: 2.5,
            w: "20%",
            h: 1,
            fontSize: 25,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "black",
            // border:"blue",
            // shadow:"000000"
        }
    },
    21: {
        id: 'businessModelName',
        title: 'Business Model Name',
        style: {
            x: 1,
            y: 3.5,
            w: "20%",
            h: 1,
            fontSize: 20,
            align: "center",
            fill: { color: "#FFFFFF" },
            color: "000000",
            // border:"blue",
            // shadow:"000000"
        }
    },
    22: {
        id: 'competition',
        title: 'Competition',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "black",
        }
    },
    23: {
        id: 'competitionImage',
        title: 'Competition Image',
        style: {
            x: 1,
            y: 2,
            w: "10%",
            h: 1,
            fontSize: 15,
            align: "center",
            fill: { color: "b4b4b4" },
            color: "#3c3c3c",
            // shadow:"000000"
        }
    },
    24: {
        id: 'competitionDescription',
        title: 'Competition Description',
        style: {
            x: 2.2,
            y: 2,
            w: "20%",
            h: 1,
            fontSize: 15,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "black",
            // shadow:"000000"
        }
    },
    25: {
        id: 'competitiveAdvantage',
        title: 'Competitive Advantage',
        style: {
            x: 1,
            y: 0.5,
            w: "80%",
            h: 1,
            fontSize: 36,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "#3c3c3c",
        }
    },
    26: {
        id: 'competitiveAdvantageName',
        title: 'Competitive Advantage Name',
        style: {
            x: 1,
            y: 2,
            w: "20%",
            h: 0.5,
            fontSize: 20,
            align: "center",
            fill: { color: "#b4b4b4" },
            color: "#3c3c3c",
        }
    },
    27: {
        id: 'competitiveAdvantageDescription',
        title: 'Competitive Advantage Description',
        style: {
            x: 1,
            y: 2.7,
            w: "20%",
            h: 0.5,
            fontSize: 15,
            align: "center",
            // fill: { color: "D3E3F3" },
            color: "#3c3c3c",
        }
    },
}

const formFields = [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 21, 23, 24, 26, 27, [3, 6, 9, 12, 15, 18, 22, 25]]

export const formData = () => {
    const form = {}
    formFields.map(x => {
        if(Array.isArray(x)){
            x.map(y => {
                form[fields[y].id] = []
            })
        } else {
            form[fields[x].id] = ''
        }
    })
    return form
}