/* 
  Code example from OpenGL examples
  
  g++ rectangle.cpp -o rectangle -lglut -lGLU -lGL
  
*/

#include <stdio.h>
#include <GL/glut.h>
#include <glm/glm.hpp>

using namespace glm;

void display(void)
{
 glClear( GL_COLOR_BUFFER_BIT);
 glColor3f(0.0, 0.0, 0.0);
 glBegin(GL_POLYGON);
  glVertex3f(2.0, 4.0, 0.0);
  glVertex3f(8.0, 4.0, 0.0);
  glVertex3f(8.0, 6.0, 0.0);
  glVertex3f(2.0, 6.0, 0.0);
 glEnd();
 glFlush();
}

int main(int argc, char **argv)
{
 printf("hello world\n");
 glutInit(&argc, argv);
 glutInitDisplayMode ( GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);

 glutInitWindowPosition(100,100);
 glutInitWindowSize(300,300);
 glutCreateWindow ("square");

 glClearColor(1.0, 1.0, 1.0, 0.0);         // black background
 glMatrixMode(GL_PROJECTION);              // setup viewing projection
 glLoadIdentity();                           // start with identity matrix

 const double mm[] = {
   1.0, 0.0, 0.0, 0.25,
   0.0, 1.0, 0.0, 0.25,
   0.0, 0.0, 1.0, 0.25,
   0.0, 0.0, 0.0, 1.0
 };


 /* 
    comment next line to get a rectabgle
  */
 glMultMatrixd(mm);
 glOrtho(0.0, 10.0, 0.0, 10.0, -1.0, 1.0);   // setup a 10x10x2 viewing world
 
 glutDisplayFunc(display);
 glutMainLoop();

 return 0;
}