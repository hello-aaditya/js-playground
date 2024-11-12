//IIFE: immediately invoked function expressions

//named iife
(function dbStatus()
{
    console.log(`DB Connected`);
})();

//unnamed iife
( (name) =>
{
    console.log(`DB Not Connected ${name}`);
})("Ramaswami")