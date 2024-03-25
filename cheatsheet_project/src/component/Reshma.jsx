const Reshma = () => {
  return (
    <>
      <div className="flex flex-col">
        <header className="bg-lime-50 flex items-center justify-center">
          <img
            className="object-center"
            src="https://www.syncfusion.com/blogs/wp-content/uploads/2022/05/JavaScript-Higher-Order-Functions-A-Complete-Guide.png"
          />
        </header>
        <section className="m-1 p-1 flex flex-col ">
          <h1 className="m-1 p-1 text-2xl italic hover:not-italic font-extrabold">
            JavaScript Higher Order Functions
          </h1>
          <p className="m-1 p-1 ">
            In JavaScript, a higher-order function is a function that can accept
            other functions as arguments, return functions, or both. They enable
            abstraction, composition, and the creation of more flexible and
            reusable code.
          </p>
          <img
            className="object-scale-down  mx-10  flex items-center justify-center"
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KbE6qWmCQg5isyMRQzwfpg.png"
            alt=""
          />
          <h2 className="m-1 p-1 text-xl hover:font-bold">
            Function as an Argument:
          </h2>
          <p>
            This approach involves passing a function (callback) as an argument
            to another function. The receiving function can then execute the
            callback, enabling flexible and customizable behavior in JavaScript
            programs.
          </p>
          <img src="/FunctionAsArgument.png" />
          <h2 className="m-1 p-1 text-xl hover:font-bold">
            Functions as Return Values:
          </h2>
          <p>
            Higher-order functions can also return new functions. This is often
            used for creating specialized functions or closures. For instance,
            you can create a function factory that generates functions with
            specific behavior.
          </p>
          <img src="/FunctionAsReturnValue.png" />
          <h2 className="m-1 p-1 text-xl hover:font-bold">
            The .reduce() Method
          </h2>
          <p>
            The .reduce() method iterates through an array and returns a single
            value. In the above code example, the .reduce() method will sum up
            all the elements of the array. It takes a callback function with two
            parameters (accumulator, currentValue) as arguments. On each
            iteration, accumulator is the value returned by the last iteration,
            and the currentValue is the current element. Optionally, a second
            argument can be passed which acts as the initial value of the
            accumulator.
          </p>
          <img src="/reduceMethod.png" />
          <h2 className="m-1 p-1 text-xl hover:font-bold">
            The .forEach() Method
          </h2>
          <p>
            The .forEach() method executes a callback function on each of the
            elements in an array in order. In the above example code, the
            callback function containing a console.log() method will be executed
            5 times, once for each element.
          </p>
          <img src="/forEachMethod.png" />
          <h2 className="m-1 p-1 text-xl hover:font-bold">
            The .filter() Method
          </h2>
          <p>
            The .filter() method executes a callback function on each element in
            an array. The callback function for each of the elements must return
            either true or false. The returned array is a new array with any
            elements for which the callback function returns true. In the above
            code example, the array filteredArray will contain all the elements
            of randomNumbers but 4.
          </p>
          <img src="/filterMethod.png" alt="" />

          <h2 className="m-1 p-1 text-xl hover:font-bold">The .map() Method</h2>
          <p>
            The .map() method executes a callback function on each element in an
            array. It returns a new array made up of the return values from the
            callback function. The original array does not get altered, and the
            returned array may contain different elements than the original
            array. In the example code above, the .map() method is used to add '
            joined the contest.' string at the end of each element in the
            finalParticipants array.
          </p>
          <img src="/mapMethod.png" alt="" />
          <h2 className="m-1 p-1 text-xl hover:font-bold"> Conclusion</h2>
          <p>
            By mastering these methods, you can significantly simplify your code
            and perform complex operations on arrays with ease. So, go ahead and
            leverage the power of map, filter, and reduce in your JavaScript
            projects to take your programming skills to the next level!
          </p>
          <img src="/Last_Thoughts.png" alt="" />
        </section>
      </div>
    </>
  );
};

export default Reshma;
