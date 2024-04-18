"use client";

import { useForm, UseFormGetValues } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "./button";
  
  function generatePriceValues(){
    let price = [];
    for (let i = 1; i <= 6; i++) {
        price.push(i * 100);
    }
    return price;
  }

  type FormValues = {
    Alamat: string;
    Kategori: string;
    hargaMinimal: string;
    hargaMaksimal: string;
};

export function SearchForm() {
  const form = useForm<FormValues>
  
  ({
    defaultValues:{
        Alamat: "",
        Kategori: "",
        hargaMinimal: "",
        hargaMaksimal: "",
    }
  });

  const prices = generatePriceValues();

  function formSubmitHandler(data:FormValues){
    console.log(data);
  }

  return (
    <Form {...form}>
      <form 
      className="p-6 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end bg-background rounded"
      onSubmit={form.handleSubmit(formSubmitHandler)}
      >
        <FormField
          control={form.control}
          name="Alamat"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Input placeholder="Temukan Berdasarkan Alamat" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="Kategori"
          render={({ field }) => {
            return (
             <FormItem>
                <FormLabel>Kategori</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Rumah</SelectItem>
                  <SelectItem value="dark">Apartemen</SelectItem>
                  <SelectItem value="system">kantor</SelectItem>
                </SelectContent>
              </Select>
           </FormItem>
            );
          }}
        />

<FormField
          control={form.control}
          name="hargaMinimal"
          render={({ field }) => {
            return (
             <FormItem>
                <FormLabel>Harga Minimal</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Harga. Minimal" />
                </SelectTrigger>
                <SelectContent>
                {prices.map((price) => (
                                    <SelectItem key={price} value={price.toString()}>
                                        {price}
                                    </SelectItem>
                                ))}

                </SelectContent>
              </Select>
           </FormItem>
            );
          }}
        />

<FormField
          control={form.control}
          name="hargaMaksimal"
          render={({ field }) => {
            return (
             <FormItem>
                <FormLabel>Harga Maksimal</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Harga. Maksimal" />
                </SelectTrigger>
                <SelectContent>
                {prices.map((price) => (
                                    <SelectItem key={price} value={price.toString()}>
                                        {price}
                                    </SelectItem>
                                ))}

                </SelectContent>
              </Select>
           </FormItem>
            );
          }}
          />
          <Button className="co-star-[1] col-end-[-1]">Temukan</Button>
      </form>
    </Form>
  );
}
