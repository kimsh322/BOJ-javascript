function solution(survey, choices) {
    const n = survey.length;
    const score = {A : 0, N : 0, C : 0, F : 0, M : 0, J : 0, R : 0, T : 0};
    for(let i=0; i<n; i++) {
        if(choices[i] >=5) {
            score[survey[i][1]] += choices[i] - 4;
        } else {
            score[survey[i][0]] += 4 - choices[i];
        }
    }
    
    let result = '';
    result += score.R >= score.T ? 'R' : 'T';
    result += score.C >= score.F ? 'C' : 'F';
    result += score.J >= score.M ? 'J' : 'M';
    result += score.A >= score.N ? 'A' : 'N'; 
    
    return result;
}