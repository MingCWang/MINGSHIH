const btnText1 = document.querySelector('.btnText1');
const experience1 = document.querySelector('.experience1');
const Jobbox1 = document.querySelector('.Jobbox1');
const work = document.querySelector('.work')


btnText1.onclick = function(){

    if (experience1.style.display === 'inline') {
        experience1.style.display = 'none';
        Jobbox1.style.height = '150px';
        btnText1.innerHTML = 'Read More';
    } else {
        experience1.style.display = 'inline';
        Jobbox1.style.height = 'auto';
        btnText1.innerHTML = 'Read Less';
    }
};

const experience2 = document.querySelector('.experience2');
const Jobbox2 = document.querySelector('.Jobbox2');
const btnText2 = document.querySelector('.btnText2')

btnText2.onclick = function(){
    if (experience2.style.display === 'inline') {
        experience2.style.display = 'none';
        Jobbox2.style.height = '150px';
        btnText2.innerHTML = 'Read More';
    } else {
        experience2.style.display = 'inline';
        Jobbox2.style.height = 'auto';
        btnText2.innerHTML = 'Read Less';
    }
}

const experience3 = document.querySelector('.experience3');
const Jobbox3 = document.querySelector('.Jobbox3');
const btnText3 = document.querySelector('.btnText3')

btnText3.onclick = function(){
    if (experience3.style.display === 'inline') {
        experience3.style.display = 'none';
        Jobbox3.style.height = '150px';
        btnText3.innerHTML = 'Read More';
    } else {
        experience3.style.display = 'inline';
        Jobbox3.style.height = 'auto';
        btnText3.innerHTML = 'Read Less';
    }

}

