import express,{Application,Request,Response,NextFunction} from 'express';

const app: Application = express();

//define a function

const add = (a: number,b:number): number => a + b;

app.get('/',(req: Request,res: Response,next: NextFunction) => {
    console.log(add(2,9))
    res.send("Hello World")
})


app.listen(5000,() => console.log('listening on port 5000'));