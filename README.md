var indexArr = []
        var newSkuArr = []
        var newSkuNum = []
        var skuArr = [1000010,1000010,100012,100013,10006,10006,10006]
        var skuNum = [1, 2, 1, 1, 2, 3, 5]

        searchKeys(skuArr)

        newSkuNum.forEach(element=>{
            element.forEach(ele=>{
                skuNum[ele] += 
            })
        })

        function searchKeys(arr){
			var str = "";
			var strary = [];
			for (var i = 0; i < arr.length; i++) {
				var hasRead = false;
				for ( var k = 0; k < strary.length; k++) {
					if (strary[k] == arr[i]){
						hasRead = true;
					}
				}
				if(!hasRead){
					var _index = i, haveSame = false;
					for (var j = i + 1; j < arr.length; j++) {
						if(j == parseInt(i) + parseInt(1)){
							_index++;
						}
						if (arr[i] ==arr[j]) {
							_index += "," + (parseInt(j)+1);
							haveSame = true;
						}
					}
					if (haveSame) {
                        strary.push(arr[i]);
                        str += '|' + _index
                        
					}
				}
            }
            newSkuArr = str.split('|')
            newSkuArr.forEach(element=>{
                element = element.split(',')
                newSkuNum.push(element.map(Number))
            })
            newSkuNum.splice(0,1)
		}
        

        
        // filterArr(skuArr)
        // indexArr.forEach(element => {
        //     console.log(element - 1)
        //     newSkuNum.push(skuNum[element - 1])
        // })
       
        // skuArr.forEach(element=>{
        //     if(element!=null){
        //         newSkuArr.push(element)
        //     }
        // }) 

        // console.log('skuArr===', newSkuNum)

        // function filterArr(arr) {
        //     let rep = [];
        //     arr.forEach((item,index)=>{
        //         if(arr.indexOf(item)!=index){ // 匹配数组元素第一个item位置和当前循环的index
        //             let obj = {};
        //             obj.key = (arr.indexOf(item) + 1) + '|' + (index + 1); // 用'|'分隔两个重复项的下标   
        //             obj.value = item;
        //             rep.push(obj);
        //         }
        //     });
        //     rep.forEach(element=>{
        //         indexArr.push(element.key)
        //     })

        //     indexArr.forEach(element => {
        //         element = element.split('|')
        //         newSkuArr.push(element)
        //     })
        //     console.log('11==',newSkuArr)
            
        //     indexArr = [...new Set(indexArr.join('|').split('|').map(Number))]
            
        // }
