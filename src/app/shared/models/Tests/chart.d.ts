export module Charts{
    interface DataSetChart{
        label: string; 
        data: number[];
        backgroundColor: string[];
    }
    interface DataChart{
        dataSetChart: DataSetChart[];
        labels: string[];
        calculatePercentage: boolean;
    }

    interface ChartFilter{
        showTimeDB: boolean; 
        showTimeAPI: boolean; 
        showTimeTEST:boolean;
    }
}