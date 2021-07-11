import { Table } from "../Table";

export default {
    title: "Table - a costumizable react table component.",
    component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {};
