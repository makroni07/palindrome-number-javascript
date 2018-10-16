function angkaPalindrome(num) {
	while(true){
		num ++;

		var angka=String(num)
		var kebalikan=angka.split('').reverse('').join('')

	if (angka===kebalikan) {
		return Number(angka)
	}
	}
  // you can only write your code here!
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001