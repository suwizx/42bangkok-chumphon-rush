function ranls(){

let ls = ['จุดชมวิวเขาออง', 'วัดถ้ำเขาเงิน', 'สวนสมเด็จพระศรีนครินทร์ฯ', 'วัดถ้ำเขาเกรียบ', 'เกาะพิทักษ์', 'วัดแหลมสน', 'เรือจำลองจักรีนฤเบศร' ,'ตลาดนัดปากน้ำหลังสวน' ,'วัดบรรพตพิสัย (วัดในเขา)' ,'จุดชมวิวคอเขา'];
let ranls = getRandomElement(ls);
let urlls = 'https://www.google.com/search?q=' + ranls
document.getElementById('urlls').href = urlls;
document.getElementById('ranls').innerHTML = ranls;
}

function showran(){
    document.getElementById('ranans').style.display = "block"
    document.getElementById('ranbtn').style.display = "none"
    ranls()
}