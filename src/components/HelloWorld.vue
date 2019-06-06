<template>
    <div class="exa">
        <div class="img"></div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="Name" prop="name">
                    <Input v-model="formValidate.name" placeholder="Enter your name"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        name:"HelloWorld",
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: ''
                },
                ruleValidate: {
                    name: [
                        {
                            'required': true,
                            'validator': test_validator.number1.validator
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        created(){
            checkReg.number.validator({dot:"",regexp:"",message:""},"aa",(val)=>{
                console.log(val);
            });
            console.log(checkReg);
        }
    }
</script>
<style>
   .img{
       width: 500px;
       height: 300px;
        background-image:

        linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1)),

        url(../assets/horse.jpg);
        background-repeat: no-repeat;

    }
</style>



