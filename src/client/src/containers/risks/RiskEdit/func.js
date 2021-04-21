//import {GetCompany} from '../../../services/firestoreCompany'
//import {GetAllCompanies} from '../../../../../services/firestoreCompany'

import {v4} from "uuid";
import faker from 'faker';

const risk = ({
  desc: `Radiações Ionizantes`,
  ins: `Anexo 2/Qualitativa`,
  noc: `Anexo 2/Qualitativa`,
  per: `Anexo 2/Qualitativa`,
  grau: `Grau Médio`,
  tempoAE: `25 anos`,
  type:'fis',
  padrao: 'Sim',
  status: 'Ativo',
  id: `123`,
});

export function onGetRisk({companyId,riskId,setData,setLoadContent,notification,setLoaderDash}) {
    function checkSuccess(response) {
        setLoadContent(false)
        setData({...response})
        setLoaderDash(false)
        console.log('data',{...response});
      }

      function checkError(error) {
        setLoadContent(false)
        setTimeout(() => {
          notification.error({message:error,modal:false})
        }, 600);
      }

      checkSuccess(risk)
      //GetCompany(companyId,riskId,checkSuccess,checkError)
}

function random() {
  return `${faker.random.words()} ${faker.random.words()} ${faker.random.words()} ${faker.random.words()} ${faker.random.words()}`
}

const types = ['fis','qui','bio','aci','erg','qui','qui','qui','qui','qui','qui']
const risks = [
{id:'123',name:`${random()}${random()}${random()}${random()}${random()}${random()}${random()}${random()}${random()}` ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},
{id:'2',name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},
{id:'3',name:random(),type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},
{id:'4',name:faker.random.words() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},
{id:'5',name:faker.random.words() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},
{id:'6',name:faker.random.words() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},{id:v4(),name:random() ,type:types[Math.floor(Math.random()*10)]},
]

const rec = [
{id:'12345',text:`${random()}`,risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},
{id:'wiw',text:random(),category:['aci']},
{id:v4(),text:random(),category:['qui','fis']},
{id:v4(),text:random(),category:['aci']},
]

const med = [
{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},
{id:v4(),text:random(),risk:['6'],category:[]},
{id:v4(),text:random(),risk:[],category:['qui','fis']},
{id:v4(),text:random(),risk:[],category:['qui']},
]

const font = [
{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},{id:v4(),text:random(),risk:['123','2','3'],category:[]},
{id:v4(),text:random(),risk:[],category:['qui']},
{id:v4(),text:random(),risk:[],category:['qui','fis']},
{id:v4(),text:random(),risk:['3'],category:[]},
]

const sort = function (a, b) {
if (a.name > b.name) {
    return 1;
}
if (b.name > a.name) {
    return -1;
}
return 0;
};

export function onGetRisksData({currentUser,notification,dispatch}) {
function checkSuccess(response) {
  console.log({...response})
  dispatch({ type: 'CREATE_RISKS', payload: [...response.risks.sort(sort)] })
  dispatch({ type: 'CREATE_RISKS_DATA', payload: {...response.data} })
}

  function checkError(error) {
    setLoadContent(false)
    setTimeout(() => {
      notification.error({message:error,modal:true})
    }, 600);
  }

  //GetAllCompanies(currentUser.company.id,checkSuccess,checkError)
  checkSuccess({risks,data:{rec,med,font}})
}
