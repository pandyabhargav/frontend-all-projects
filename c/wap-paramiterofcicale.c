#include<stdio.h>
main(){

 float rad,area, perm;
 
    printf("Enter radius of circle: ");
    scanf("%f",&rad);
 
    area = 3.14 * rad * rad;
    perm = 2 * 3.14 * rad;
 
    printf("Area of circle: %f \nPerimeter of circle: %f\n",area,perm);
}
