function checkCashRegister(price, cash, cid) {
  let change = cash - price

  let obj = { status: "INSUFFICIENT_FUNDS", change: []}
  const dict = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20]
  const dict1 = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100}
  const idx = dict.filter(el => el < change).length
  const arr = cid.slice(0, idx).reverse()

  const finder = (arr) => {
    let name = arr[0]
    let val = arr[1]
    let remainder = change % dict1[name]
    if ( dict1[name] <= change){
    if (val <= change){
      obj.change.push(arr)
      change -= val
    }
    else if (val > change){
      arr[1] = change - remainder
      obj.change.push(arr)
      change -= arr[1] - 0.0000000000001
    }
    } 
  }

  let total = 0

  for (let i of arr){
    total += i[1]
  }
  total = total
  
 if (total < change) {
   return obj;
 } 
 if (total === change) {
   obj.status = 'CLOSED'
   obj.change = cid
   return obj;
 }
 if (total > change){
   obj.status = 'OPEN'
   for (let i of arr){
     if (change === 0){
       break
     }
     finder(i);
   }
   
   return obj
 }
 }
// test console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
