#include<stdio.h>
main(){
float p, r, t ,si;

printf("enter the principle amount");
scanf("%f", &p);

printf("enter the rate");
scanf("%f", &r);

printf("enter the principle time");
scanf("%f", &t);

si = (p * r * t)/100;

printf("area or simple intrest is %f", si);

}
