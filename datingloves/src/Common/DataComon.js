import avt_default from '../images/avtDefault.jpg'
// import avt_conan1 from '../images/conan/pic1.png'
// import avt_conan2 from '../images/conan/pic2.png'
import avt_kaitokit1 from '../images/kaitokit/pic1.png'
import avt_kaitokit2 from '../images/kaitokit/pic2.png'
import avt_kaitokit3 from '../images/kaitokit/pic3.png'
import avt_kaitokit4 from '../images/kaitokit/pic4.png'
// import avt_luffy1 from '../images/luffy/pic1.png'
// import avt_luffy2 from '../images/luffy/pic2.png'
// import avt_luffy3 from '../images/luffy/pic3.png'
// import avt_nami1 from '../images/nami/pic1.png'
// import avt_nami2 from '../images/nami/pic2.png'
// import avt_nami3 from '../images/nami/pic3.png'
// import avt_naruto1 from '../images/naruto/pic1.png'
// import avt_naruto2 from '../images/naruto/pic2.png'
// import avt_naruto3 from '../images/naruto/pic3.png'
// import avt_ran1 from '../images/ran/pic1.png'
// import avt_ran2 from '../images/ran/pic2.png'
// import avt_ran3 from '../images/ran/pic3.png'
// import avt_zoro1 from '../images/zoro/pic1.png'
// import avt_zoro2 from '../images/zoro/pic2.png'
// import avt_zoro3 from '../images/zoro/pic3.png'


export const dataUserDefault = [
    {
        id : "000001",
        name : "Ho Ngoc Khanh",
        images : [avt_kaitokit1, avt_kaitokit2, avt_kaitokit3, avt_kaitokit4]
    },
    {
        id : "000002",
        name : "Ho Thua An",
        img : []
    },
    {
        id : "000003",
        name : "Ho Nhan Nga",
        img : []
    },
    {
        id : "000004",
        name : "Ho Notej",
        img : []
    },
]

export function getBirth (date) {
    const newStartDate= new Date(date);
    const newEndDate=Date.now();
    const one_day = 1000*60*60*24;
    let result
    result = Math.ceil((newEndDate-newStartDate.getTime())/(one_day))
    if (result < 0 ) {return 0}
    return Math.round(result/365);
}