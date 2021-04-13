function getUserData(userData){
    const {userCode, userRole} = userData;
    const newUserData = {userCode,userRole,uName: "JV Faeldon"};
    console.warn(`${newUserData.userCode} - ${newUserData.userRole} - ${newUserData.uName}`);
}

let users = getUserData({userCode: "IT0016", userRole: "ADMIN"});