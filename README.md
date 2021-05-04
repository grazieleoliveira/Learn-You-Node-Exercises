# Learn You Node Exercises
## A brief introduction 

Since I've decided to start commiting myself to learning NodeJS this year, I started looking up useful resources to help me in this road. Then, I found out the amazing [NodeSchool.io](http://nodeschool.io/), which has AMAZING material for starters. Their method of bringing the knowledge through a fun CLI application is just amazing and I am loving it! So, I created this repository to show my solutions of the exercises.

## Explaining each challenge

- Write a program that prints the text "HELLO WORLD" to the console (**hello-world.js**)
- Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (**baby-steps.js**)
- Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l. (**my-first-io.js**)
- Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l. (**my-first-async-io.js**)
- Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument. (**filtered-ls.js**)
- Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. The first argument is the
  directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O. (**make it modular**)
-  Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout). (**http-client.js**)

### You can try testing it in your machine!

Make sure you have node installed and you are good to go! For example, you can run the async challenge by using the command `node my-first-async-io.js ./my-first-io.txt`

If you want to try it using another txt file just copy the full path and change **./my-first-io.txt** from the previous command to **./whatever/path/your/file/is.txt**