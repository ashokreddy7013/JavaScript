let brands = [ { id:1 , name:'Maruthi Suzuki'} ,
                { id:2 , name:'Suzuki NEXA'},
                 { id:3 , name:'Hyndai Motors'}];
let models = [{id:1,card_id:1,name:'Swift'},
                {id:2,card_id:1,name:'Brezza'},
                {id:3,card_id:1,name:'Dzire'},
                {id:4,card_id:2,name:'Baleno'},
                {id:5,card_id:2,name:'Scross'},
                {id:6,card_id:2,name:'Ignis'},
                {id:7,card_id:3,name:'Grand i20'},
                {id:8,card_id:3,name:'Creta'},
                {id:9,card_id:3,name:'Verna'},
            ];
let brandSelect = document.querySelector('#brand-select');
let modalSelect = document.querySelector('#model-select');

let brandOptions = '<option value="0">Select a Brand</option>';
brands.forEach((brand) => {
    brandOptions += `<option value="${brand.id}">${brand.name}</option> \n`;
});
brandSelect.innerHTML = brandOptions;

brandSelect.addEventListener('change',function() {
    let modelOptions = '<option value="0">Select a Model</option>';
    let selectedId = Number(brandSelect.value);
    let selectedModels = models.filter((model) => {
        return model.card_id === selectedId;
    });
    selectedModels.forEach((model) => {
        modelOptions += `<option value="${model.id}">${model.name}</option>`
    });
    modalSelect.innerHTML = modelOptions;
});

