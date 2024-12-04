#include<stdio.h>
main(){
printf("(1)");
printf("\n\t\t\t*\t\t*");
 printf("\n\t\t*\t\t*");
 printf("\n\t*\t\t*");
 printf("\n\t\t*\t\t*");
printf("\n\t\t\t*\t\t*");
 
 
 printf("\n\n\n(2)");
 printf("\n\n\t\t*\t*\t*\t*\t*\t*\t*\t");
 printf("\n\n\t*\t*\t*\t*\t*\t*\t*\t*\t");
 printf("\n\n\t*\t\t*\t\t\t\t\t*\t");
  printf("\n\n\t*\t\t*\t\t*\t*\t*\t*\t");
  printf("\n\n\t*\t\t*\t\t*\t\t*\t*\t");
  printf("\n\n\t*\t*\t*\t*\t*\t*\t*\t*\t");
  
  
  printf("\n\n\n(3)");
  
  int a = 20, b = 30 ;
  printf("swap the value a =%d, b =%d", a , b);
  
  a = b + a; //50
  b = a - b; //50 -30 =20  
  a = b - a; // 20 - 50 =30
  printf("swap the value a=%d, b=%d", a , b);
  
  printf("\n\n\n(4)"); 
  
	float f, c;
	
	printf ("enter the calsius = %f");
	scanf ("%f", &c);
	f = (9/5*c)+32;
	printf ("f is %f f=(9/5*c)+32 %f",c,f);
	
	printf("\n\(5)"); 
	
	
	int hra, da, ta, bs;
    printf("enter the bs =");
    scanf("%d",&bs);
    
    hra = bs*10/100;
    da = bs*8/100;
    ta = bs*5/100;
    
    printf("ans is %d",bs);
	
}
