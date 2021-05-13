function superbowlWin(record){
let findWin = record.find(record => record.result === 'W'
)
if (findWin){return findWin.year}
}
    
    




