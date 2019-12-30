function perulangan() {
  for(var i = 1; i<=55; i++) {
    if (i%2===1) {
      if (i===7 || i===11 || i===13 || i===17 || i===19 || i===23 || i===25 || i===29 || i===31 || i===33 || i===37 || i===39 || i===41 || i===43 || i===47 || i===49 || i===51 || i===53){
        continue;
      }
      if (i===5 || i===9 || i===27 || i===35) {
        i++;
      }
      console.log(i);
    }
  }
}
perulangan()
