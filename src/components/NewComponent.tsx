type NewComponentPropsType = {
  //   students: Array<StudentType>;
  students: StudentType[];
};

type StudentType = {
  id: number;
  name: string;
  age: number;
};

type CarsType = {
  manufacturer: string;
  model: string;
};

export const NewComponent = (props: NewComponentPropsType) => {
  const topCars: CarsType[] = [
    { manufacturer: "BMW", model: "m5cs" },
    { manufacturer: "Mercedes", model: "e63s" },
    { manufacturer: "Audi", model: "rs6" },
  ];

  return (
    <>
      {topCars.map((car, index) => {
        return (
          <div key={index}>
            {car.manufacturer} {car.model}
          </div>
        );
      })}
    </>
  );

  //   return (
  //     <>
  //       {props.students.map((objectFromStudentArray) => {
  //         return (
  //           <ul key={objectFromStudentArray.id}>
  //             <li>
  //               {objectFromStudentArray.name} age: {objectFromStudentArray.age}
  //             </li>
  //           </ul>
  //         );
  //       })}
  //     </>
  //   );
};
