class Skills {
    constructor () {
        const skills = [
            {
                skill: 'Java', 
                value: 75
            }, 
            {
                skill: 'Kotlin', 
                value: 60
            },  
            {
                skill: 'Swift', 
                value: 50
            }, 
            {
                skill: 'Google Cloud', 
                value: 40
            }, 
            {
                skill: 'Node.js', 
                value: 35
            }, 
            {
                skill: 'JavaScript', 
                value: 30
            }, 
            {
                skill: 'HTML', 
                value: 35
            }, 
            {
                skill: 'CSS', 
                value: 25
            },  
        ];
    
        this.makeSkillsBar(skills);
    }

    makeSkillsBar(skills) {
        const barsLeft = document.querySelector('.main__skills__bars.bars-left');
        const barsRight = document.querySelector('.main__skills__bars.bars-right');

        let left = true;
        let divsLeft = '';
        let divsRight = '';
        let divAux = '';

        skills.forEach(skill => {
            divAux = `<div class="main_skills_bars__bar"><div class="main_skills_bars__bar__inner" style="width:${skill.value}%;">${skill.skill}</div><p class="percentual">${skill.value}%</p></div>`;
            if (left) {
                divsLeft += divAux;
                left = false;
            } else {
                divsRight += divAux;
                left = true;
            }
        });

        barsLeft.innerHTML = divsLeft;
        barsRight.innerHTML = divsRight;
    }
}