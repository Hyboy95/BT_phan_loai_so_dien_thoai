
function classifyPhoneNumber(listPhoneNumber: string[]) {
    const listFirstThreeViettel: string[] = ['096','097','098','086'];
    const listFirstThreeMobiphone: string[] = ['090','093','089'];
    const listFirstThreeVinaphone: string[] = ['081','082','083','084','085'];
    let ViettelNumberPhone = [];
    let MobiphoneNumberPhone = [];
    let VinaNumberPhone = [];
    listPhoneNumber.forEach(item => {
        let x = item.substring(0,3);
        if (listFirstThreeViettel.includes(x)) {
            ViettelNumberPhone.push(item);
        } else if (listFirstThreeMobiphone.includes(x)) {
            MobiphoneNumberPhone.push(item);
        } else if (listFirstThreeVinaphone.includes(x)) {
            VinaNumberPhone.push(item);
        }
    })
    return [['Viettel','Mobilephone','Vinaphone'],[ViettelNumberPhone,MobiphoneNumberPhone,VinaNumberPhone]]
}

let listPhoneNumber = ['0984598333','0813456673','0905123456','09734567','082123457'];
console.table(classifyPhoneNumber(listPhoneNumber));

