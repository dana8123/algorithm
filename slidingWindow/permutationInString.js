/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    let start = 0;
    let end = 0;
    let charReq = {};
    let match = 0;
    
    // map 생성
    for(let i = 0; i<s1.length; i++) {
        if(charReq[s1[i]] === undefined) {
            charReq[s1[i]] = 1;
        } else {
            charReq[s1[i]]++;
        }
    }
    
    // s2길이만큼 반복문을 시행, end를 점점 높이면서 비교한다.
    for(let end = 0; end<s2.length; end++) {
        const endVal = s2[end];
        
        if(endVal in charReq) {
            charReq[endVal] -=1;
            // map value가 0이 되면 매치되는 단어를 찾은것
            if(charReq[endVal] === 0) {
                match +=1;
            }
        }
        
       if(match === Object.keys(charReq).length) return true; 
            // end 인덱스가 주어진 패턴보다 길 때, start 인덱스의 값을 변경
        if(end >= s1.length - 1) {
            const startVal = s2[start];
            start+=1;
            // 시작 인덱스가 가리키는 값이 패턴에 해당하면, 맵의 value를 1추가한다.
            if(startVal in charReq) {
                // 맵의 value가 0이면, 이미 endVal로 해당값을 확인한 것임. match에 해당하느 값은 -1해준다..
                if(charReq[startVal] === 0) {
                    match -=1;
                }
                charReq[startVal] +=1;
            }
    }
    console.log(match, charReq)
    
    
    }
    
    return false;
};