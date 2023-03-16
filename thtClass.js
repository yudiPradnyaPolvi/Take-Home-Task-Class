console.log ("Take Home Task  Class")
console.log ("Task Nomor 1")
class person {
    name = "polvi";
    age = 21;
    gender ="Laki-Laki";
    height = 165;
    setName(name){
        this.name=name
    }   
    setAge(age){
        this.age=age
    }
    setGender (gender){
        this.gender=gender

    }
    setHeight (height){
        this.height = height

    }

    getName(name){
        const names = {
            names:this.name
        }
        return names
    }
    getAge (age){
        const ages = {
            ages:this.age
        }
        return ages

    }
    getGender(gender){
        const genders = {
            genders:this.gender
        }
        return genders

    }
    getHeight(height){
        const heights = {
            heights:this.height
        }
        return heights


    }
}
const persons = new person()
console.log (person);

let dataName=persons.getName();
console.log (dataName);

let dataAge=persons.getAge();
console.log (dataAge);

let dataGender=persons.getGender();
console.log (dataGender);

let dataHeight=persons.getHeight();
console.log (dataHeight);


persons.setName("duta")
dataName = persons.getName();
console.log (dataName);

persons.setAge(24)
dataAge =persons.getAge();
console.log (dataAge);

persons.setGender("Laki-Laki")
dataGender =persons.getGender();
console.log (dataGender);

persons.setHeight(170)
dataHeight =persons.getHeight();
console.log (dataHeight);

console.log("Task Nomor 2")
class Student {
    Nama = "Adel" ;
    NIM = 2005541144;
    daftarNilai =[95,80];
    setNama (Nama){
        this.Nama=Nama
    }
    setNIM (NIM){
        this.NIM=NIM
    }
    setdaftarNilai(daftarNilai){
        this.daftarNilai=daftarNilai
    }

    setDataBaru(daftarNilai){
        this.daftarNilai =daftarNilai
        
    }
    getDataNilais(){

        let nilai ={
            nilai:this.daftarNilai 
        }
        return nilai;
    }

    getDataNilai (){
        let jumlahData = 2;
        let nilai1 =this.daftarNilai
        let totalNilai=nilai1[0]+nilai1[1]
        
        let mean 
    
           mean = totalNilai /jumlahData
           
        return mean;
    }

    getPredikat(){
        

        let daftarNilai1=this.daftarNilai
        if (daftarNilai1[0]>=80){
            console.log("selamat predikat anda =A")

        }
        else if (daftarNilai1[0] < 80 ){
            console.log("selamat predikat anda =B+")

        }
        else if (daftarNilai1[0] < 75 ){
            console.log("selamat predikat anda =B")

            
        }
        else if (daftarNilai1[0] < 70 ){
            console.log("selamat predikat anda =C+")

        }
        
        else if (daftarNilai1[0] < 60 ){
            console.log("selamat predikat anda =C")

        }
        else if (daftarNilai1[0] < 50 ){
            console.log("selamat predikat anda =D")

        }
        else if (daftarNilai[0] < 40 ){
            console.log("selamat predikat anda =E")

        }
    
    }
}
    
    
const Students = new Student()
console.log (Students);

let dataMeanNilai=Students.getDataNilai();
console.log ("mean ="+dataMeanNilai)
let dataPredikat=Students.getPredikat();
console.log (dataPredikat)




Students.setDataBaru([50,60,70])
setDataBarus =Students.getDataNilais();
console.log("nilai baru sebagai berikut: ")
console.log(setDataBarus)
