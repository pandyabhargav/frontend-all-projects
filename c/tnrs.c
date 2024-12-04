#include<stdio.h>
myfun(){
	int i;
	
	for(i = 0; i <= 10; i++){
		if(i %2 == 0){
			printf(" sucsses\n",i);	
		}
		else{
			printf(" error\n",i);
		}
	}
}
mufun1(){
	int a; int ans;
	printf("enter the number for a");
	scanf("%d",&a);

	ans = a * a * a;
	printf("anser is %d %d\n",a,ans);
	
}

main(){
 	myfun();
 	mufun1();
 	

}
