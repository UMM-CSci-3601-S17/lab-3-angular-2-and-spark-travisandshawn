## New '.gitignore' locations:
  
There is a new .gitignore in both the /client & /server folders.


## Multiple 'build.gradle's, why?

Now we have two new 'build.gradle' files. One in /client, and one in /server.  
One possible reason was to allow the client changes to be updated without having to rebuild the server.

##New tools in this Project, what do they do?

New tools are: TypeScript and Angular 2.  
Angular 2 allows for changes to the displayed list immediately, without the need to submit, or resubmit, a request. Also, it allows the for changes from the code to be implemented without restarting the server.  
TypeScript type-declaration to JavaScript code.

##How does the navbar work? Does the server handle all routing?

So the navbar it's just a combination of links which use the client to route. No it does not, because we had to provide the route in client's 'app.routes.ts'.

##what does 'user-list.service.ts' do? Can't 'user-list.component.ts' handle it?

Not easily, if at all. We could not make it work but if we were more familiar with angular2 then we would probably succeed.