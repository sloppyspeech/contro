const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PaymentsSchema = new Schema({
    userId: { type: Number, required: true },
    amount: { type: mongoose.SchemaTypes.Decimal128, required: true },
    purpose: { type: String, required: true },
    paymentDate:{type:Date,default:Date.now},
    isExpense:{type:Boolean,default:false}
});

PaymentsSchema.set('toJSON',{
    getters:true,
    transform:(doc,ret) =>{
        ret.amount=ret.amount.toString();
    }
}
);

const Payments= module.exports = mongoose.model('UserPayments', PaymentsSchema);